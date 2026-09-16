import { readFile } from "node:fs/promises";
import { buildQuestionBank, CATEGORY_META, CONCEPTS, SOURCES } from "../public/data.js";

const errors = [];
const questions = buildQuestionBank();

function assert(condition, message) {
  if (!condition) errors.push(message);
}
assert(CATEGORY_META.length === 11, `Očekáváno 11 kategorií, nalezeno ${CATEGORY_META.length}.`);
assert(Object.keys(CONCEPTS).length === 11, `Datový soubor nemá 11 kategorií konceptů.`);
assert(questions.length === 1320, `Očekáváno 1 320 otázek, nalezeno ${questions.length}.`);

const categoryIds = new Set(CATEGORY_META.map((category) => category.id));
const sourceIds = new Set(Object.keys(SOURCES));
const ids = new Set();
const signatures = new Set();

for (const category of CATEGORY_META) {
  const concepts = CONCEPTS[category.id] ?? [];
  const categoryQuestions = questions.filter((question) => question.category === category.id);
  assert(concepts.length === 30, `${category.title}: očekáváno 30 ověřených konceptů, nalezeno ${concepts.length}.`);
  assert(categoryQuestions.length === 120, `${category.title}: očekáváno 120 otázek, nalezeno ${categoryQuestions.length}.`);

  const terms = new Set();
  for (const concept of concepts) {
    assert(!terms.has(concept.term), `${category.title}: duplicitní pojem „${concept.term}“.`);
    terms.add(concept.term);
    assert(concept.definition.length >= 35, `${category.title}/${concept.term}: příliš krátká definice.`);
    assert(concept.example.length >= 35, `${category.title}/${concept.term}: příliš krátký příklad.`);
    assert(concept.importance.length >= 35, `${category.title}/${concept.term}: příliš krátké vysvětlení významu.`);
    assert(concept.sources.length >= 2, `${category.title}/${concept.term}: každý pojem musí mít alespoň dva nezávislé zdroje.`);
    for (const sourceId of concept.sources) {
      assert(sourceIds.has(sourceId), `${category.title}/${concept.term}: neznámý zdroj ${sourceId}.`);
    }
  }
}

for (const question of questions) {
  assert(categoryIds.has(question.category), `${question.id}: neznámá kategorie.`);
  assert(!ids.has(question.id), `${question.id}: duplicitní ID.`);
  ids.add(question.id);
  assert(question.options.length === 4, `${question.id}: otázka nemá čtyři odpovědi.`);
  assert(new Set(question.options).size === 4, `${question.id}: odpovědi nejsou unikátní.`);
  assert(Number.isInteger(question.correctIndex) && question.correctIndex >= 0 && question.correctIndex <= 3, `${question.id}: neplatný index správné odpovědi.`);
  assert(question.explanation.length >= 70, `${question.id}: vysvětlení je příliš krátké.`);
  assert(question.sources.length >= 1, `${question.id}: chybí zdroj.`);
  const signature = JSON.stringify([question.prompt, [...question.options].sort()]);
  assert(!signatures.has(signature), `${question.id}: duplicitní znění a sada odpovědí.`);
  signatures.add(signature);
}

for (const [sourceId, source] of Object.entries(SOURCES)) {
  assert(source.title.length > 8, `${sourceId}: chybí smysluplný název zdroje.`);
  assert(source.organization.length > 2, `${sourceId}: chybí organizace.`);
  assert(source.url.startsWith("https://"), `${sourceId}: zdroj nepoužívá HTTPS.`);
}

const [html, css, app, netlify] = await Promise.all([
  readFile(new URL("../public/index.html", import.meta.url), "utf8"),
  readFile(new URL("../public/styles.css", import.meta.url), "utf8"),
  readFile(new URL("../public/app.js", import.meta.url), "utf8"),
  readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
]);

assert(html.includes('lang="cs"'), "HTML nemá nastavenou češtinu.");
assert(html.includes("viewport-fit=cover"), "Chybí bezpečná podpora iPad viewportu.");
assert(html.includes("1 320 otázek"), "Úvod neuvádí úplný počet otázek.");
assert(css.includes("prefers-reduced-motion"), "Chybí režim omezeného pohybu.");
assert(css.includes("safe-area-inset"), "Chybí podpora bezpečných okrajů zařízení.");
assert(app.includes("textContent"), "Dynamické UI nepoužívá bezpečné textové vkládání.");
assert(!app.includes("innerHTML"), "Aplikace nesmí vkládat data přes innerHTML.");
assert(netlify.includes("Content-Security-Policy"), "Chybí Content-Security-Policy pro Netlify.");
assert(netlify.includes("frame-ancestors 'none'"), "CSP neblokuje vložení do cizího rámce.");

if (errors.length > 0) {
  console.error(`QA selhalo (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("QA prošlo.");
  console.log(`- ${CATEGORY_META.length} kategorií`);
  console.log(`- ${questions.length.toLocaleString("cs-CZ")} unikátních otázek`);
  console.log(`- ${Object.keys(SOURCES).length} odborných zdrojů`);
  console.log("- 4 unikátní možnosti a právě 1 správný index u každé otázky");
  console.log("- česká lokalizace, iPad safe areas, reduced motion a bezpečnostní hlavičky");
}
