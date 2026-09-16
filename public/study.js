/* Čistá logika učení: plánování opakování a vyhodnocení zkouškového režimu.
   Bez DOM, aby šla ověřit automatickým testem. */

export const DAY_MS = 86400000;

/* Dny do dalšího opakování podle Leitnerovy přihrádky. */
export const BOX_INTERVALS = [1, 2, 4, 9, 18, 35];
export const MAX_BOX = BOX_INTERVALS.length - 1;

/* Hodnoticí standard 74-035-M: 70 % celkem a nejméně 60 % v každém kritériu.
   Kvíz pracuje s kompetencemi, ne s jednotlivými kritérii, takže stejné
   pravidlo aplikuje na úrovni kompetencí. */
export const EXAM_OVERALL = 0.7;
export const EXAM_PER_AREA = 0.6;

export const todayIndex = (now = Date.now()) => Math.floor(now / DAY_MS);

export const newEntry = (day) => ({ b: 0, d: day, w: 0, f: 0, m: 0 });

/* Chyba vrací otázku na začátek a zpřístupní ji hned ve stejný den. */
export function applyWrong(entry, day) {
  return { ...entry, w: entry.w + 1, b: 0, d: day };
}

/* Správně napoprvé posune o přihrádku dál, po chybě se otázka vrací nazítří. */
export function applyCorrect(entry, day, firstTry) {
  if (!firstTry) return { ...entry, m: 1, b: 0, d: day + 1 };
  const box = Math.min(MAX_BOX, entry.b + 1);
  return { ...entry, m: 1, b: box, d: day + BOX_INTERVALS[box] };
}

/* Pořadí studia: nejdřív otázky po termínu, pak dosud neviděné, nakonec
   naplánované do budoucna. Řazení je stabilní, takže uvnitř skupiny zůstává
   pořadí tak, jak přišlo (tedy vylosované). */
export function orderByDue(pool, entries, day) {
  const due = [];
  const unseen = [];
  const later = [];
  for (const question of pool) {
    const entry = entries[question.id];
    if (!entry) unseen.push(question);
    else if (entry.d <= day) due.push(question);
    else later.push(question);
  }
  due.sort((a, b) => entries[a.id].d - entries[b.id].d);
  later.sort((a, b) => entries[a.id].d - entries[b.id].d);
  return [...due, ...unseen, ...later];
}

/* Vyhodnocení zkouškového nácviku. `answers` je pole { category, correct }. */
export function evaluateExam(answers, categories) {
  const perCategory = categories
    .map((category) => {
      const rows = answers.filter((answer) => answer.category === category.id);
      const correct = rows.filter((answer) => answer.correct).length;
      return { category, total: rows.length, correct, rate: rows.length ? correct / rows.length : null };
    })
    .filter((row) => row.total > 0);

  const total = answers.length;
  const correct = answers.filter((answer) => answer.correct).length;
  const overall = total ? correct / total : 0;
  const failing = perCategory.filter((row) => row.rate < EXAM_PER_AREA);
  return {
    perCategory,
    total,
    correct,
    overall,
    failing,
    passed: total > 0 && overall >= EXAM_OVERALL && failing.length === 0,
  };
}
