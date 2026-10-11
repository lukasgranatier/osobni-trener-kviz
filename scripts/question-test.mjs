import assert from "node:assert/strict";
import { buildQuestionBank, CATEGORY_META, CONCEPTS } from "../public/data.js";

const questions = buildQuestionBank();
const byId = new Map(questions.map((question) => [question.id, question]));

// Regression cases from the factual review: the second term can describe the
// same situation or is a broader/narrower answer, so it must not be a distractor.
const overlappingAnswers = [
  ["09-031", "pomoc operátora tísňové linky"],
  ["07-111", "nácvik po částech"],
  ["03-090", "bílkoviny"],
  ["04-007", "princip progrese"],
  ["05-106", "týdenní frekvence"],
  ["05-103", "týdenní objem"],
  ["07-066", "afirmace"],
  ["08-018", "zklidnění po výkonu"],
  ["02-062", "dynamické pozorování"],
  ["06-062", "monitorování RPE"],
];

for (const [id, overlapping] of overlappingAnswers) {
  const question = byId.get(id);
  assert.ok(question, `Missing regression question ${id}`);
  assert.ok(!question.options.includes(overlapping),
    `${id}: overlapping answer “${overlapping}” was reintroduced`);
}

// Check the shuffled key against the underlying concept for the entire bank.
// This checks generation/key integrity, not the scientific truth of the concept.
for (const category of CATEGORY_META) {
  for (const [index, concept] of CONCEPTS[category.id].entries()) {
    const code = String(category.index).padStart(2, "0");
    for (let variant = 0; variant < 4; variant += 1) {
      const id = `${code}-${String(index * 4 + variant + 1).padStart(3, "0")}`;
      const question = byId.get(id);
      const expected = variant === 0 ? concept.definition
        : variant === 3 ? `${concept.term} — ${concept.definition}` : concept.term;
      assert.equal(question.options[question.correctIndex], expected,
        `${id}: shuffled key no longer points to the concept answer`);
      assert.equal(question.options.filter((option) => option === expected).length, 1,
        `${id}: concept answer is missing or duplicated`);
      assert.equal(question.explanation, `${concept.definition} ${concept.importance}`,
        `${id}: explanation belongs to another concept`);
      assert.deepEqual(question.sources, concept.sources,
        `${id}: source provenance belongs to another concept`);
    }
  }
}

assert.deepEqual(buildQuestionBank(), questions, "Question order/options must be deterministic");
console.log("Testy generování otázek prošly.");
console.log(`- ${questions.length} správně přiřazených klíčů, vysvětlení a zdrojů`);
console.log(`- ${overlappingAnswers.length} regresních případů překrývajících se odpovědí`);
