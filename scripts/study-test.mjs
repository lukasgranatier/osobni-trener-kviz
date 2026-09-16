/* Ověření plánování opakování a zkouškového pravidla 70 / 60. */
import {
  applyCorrect,
  applyWrong,
  BOX_INTERVALS,
  evaluateExam,
  EXAM_OVERALL,
  EXAM_PER_AREA,
  MAX_BOX,
  newEntry,
  orderByDue,
} from "../public/study.js";

const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const DAY = 100;

// --- plánování ------------------------------------------------------------

let entry = newEntry(DAY);
check(entry.b === 0 && entry.d === DAY && entry.m === 0, "Nová položka nemá výchozí hodnoty.");

// Správně napoprvé posouvá po přihrádkách podle tabulky intervalů.
let expectedBox = 0;
for (let step = 0; step < 8; step += 1) {
  entry = applyCorrect(entry, DAY, true);
  expectedBox = Math.min(MAX_BOX, expectedBox + 1);
  check(entry.b === expectedBox, `Po ${step + 1}. správné odpovědi čekáme přihrádku ${expectedBox}, je ${entry.b}.`);
  check(entry.d === DAY + BOX_INTERVALS[expectedBox], `Termín po ${step + 1}. odpovědi neodpovídá intervalu.`);
  check(entry.m === 1, "Zvládnutá otázka musí zůstat označená jako zvládnutá.");
}
check(entry.b === MAX_BOX, "Přihrádka nesmí přetéct nad maximum.");

// Chyba vrací na začátek a zpřístupní otázku hned.
const afterWrong = applyWrong(entry, DAY);
check(afterWrong.b === 0, "Chyba musí vrátit otázku do nulté přihrádky.");
check(afterWrong.d === DAY, "Chybná otázka má být splatná ihned.");
check(afterWrong.w === entry.w + 1, "Chyba se musí připočíst.");
check(afterWrong.m === entry.m, "Chyba nemaže dřívější zvládnutí.");

// Správně až na druhý pokus vrací otázku nazítří, nikoli o přihrádku výš.
const afterRecovery = applyCorrect(afterWrong, DAY, false);
check(afterRecovery.b === 0, "Po chybě nesmí správná odpověď posunout přihrádku.");
check(afterRecovery.d === DAY + 1, "Po chybě se má otázka vrátit další den.");
check(afterRecovery.m === 1, "Dořešená otázka je zvládnutá.");

// --- pořadí ---------------------------------------------------------------

const pool = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];
const entries = {
  a: { ...newEntry(DAY), d: DAY + 10 },
  b: { ...newEntry(DAY), d: DAY - 5 },
  d: { ...newEntry(DAY), d: DAY },
};
const ordered = orderByDue(pool, entries, DAY).map((item) => item.id);
check(ordered.join("") === "bdca", `Pořadí podle splatnosti je ${ordered.join("")}, čekáme bdca.`);

const emptyOrder = orderByDue(pool, {}, DAY).map((item) => item.id);
check(emptyOrder.join("") === "abcd", "Bez historie musí pořadí zůstat, jak přišlo.");

// --- zkouškové pravidlo ---------------------------------------------------

const areas = [{ id: "x", title: "X" }, { id: "y", title: "Y" }];
const rows = (category, correct, wrong) => [
  ...Array.from({ length: correct }, () => ({ category, correct: true })),
  ...Array.from({ length: wrong }, () => ({ category, correct: false })),
];

// 80 % celkem a obě oblasti nad 60 % → prošel
let verdict = evaluateExam([...rows("x", 4, 1), ...rows("y", 4, 1)], areas);
check(verdict.passed, "80 % celkem a obě oblasti nad hranicí měly projít.");
check(Math.abs(verdict.overall - 0.8) < 1e-9, "Celková úspěšnost se počítá špatně.");

// 70 % celkem, ale jedna oblast na 40 % → neprošel kvůli oblasti
verdict = evaluateExam([...rows("x", 10, 0), ...rows("y", 4, 6)], areas);
check(verdict.overall >= EXAM_OVERALL, "Kontrolní scénář má mít celkem nad 70 %.");
check(!verdict.passed, "Oblast pod 60 % musí zkoušku shodit i při dobrém celku.");
check(verdict.failing.length === 1 && verdict.failing[0].category.id === "y", "Pod hranicí má být označená oblast y.");

// obě oblasti přesně na hranici 60 %, celkem 60 % → neprošel kvůli celku
verdict = evaluateExam([...rows("x", 3, 2), ...rows("y", 3, 2)], areas);
check(verdict.failing.length === 0, "Přesně 60 % v oblasti není pod hranicí.");
check(!verdict.passed, "Celkových 60 % nestačí na hranici 70 %.");

// přesně na obou hranicích → prošel
verdict = evaluateExam([...rows("x", 7, 3), ...rows("y", 7, 3)], areas);
check(verdict.passed, "Přesně 70 % celkem a 70 % v oblastech má projít.");

check(evaluateExam([], areas).passed === false, "Prázdná zkouška nesmí projít.");
check(EXAM_OVERALL === 0.7 && EXAM_PER_AREA === 0.6, "Hranice musí odpovídat hodnoticímu standardu.");

if (errors.length > 0) {
  console.error("Testy učební logiky neprošly:");
  for (const message of errors) console.error("- " + message);
  process.exit(1);
}
console.log("Testy učební logiky prošly.");
console.log(`- plánování opakování (${BOX_INTERVALS.join(", ")} dní)`);
console.log("- pořadí podle splatnosti");
console.log("- zkouškové pravidlo 70 % celkem a 60 % v každé oblasti");
