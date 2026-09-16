import { buildQuestionBank, CATEGORY_META, SOURCES } from "./data.js";
import {
  applyCorrect,
  applyWrong,
  BOX_INTERVALS,
  evaluateExam,
  EXAM_PER_AREA,
  newEntry,
  orderByDue,
  todayIndex,
} from "./study.js";

const STORAGE_KEY = "trener74-state-v2";
const LEGACY_KEY = "trener74-state-v1";
const THEME_KEY = "trener74-theme-v1";
const THEMES = ["auto", "light", "dark"];
const THEME_LABELS = {
  auto: "Automaticky",
  light: "Světlý režim",
  dark: "Tmavý režim",
};

const questionBank = buildQuestionBank();
const questionsByCategory = Object.fromEntries(
  CATEGORY_META.map((category) => [
    category.id,
    questionBank.filter((question) => question.category === category.id),
  ]),
);

const elements = {
  categoryNav: document.querySelector("#categoryNav"),
  overallProgress: document.querySelector("#overallProgress"),
  welcomeView: document.querySelector("#welcomeView"),
  quizView: document.querySelector("#quizView"),
  resultView: document.querySelector("#resultView"),
  startTitle: document.querySelector("#startTitle"),
  selectedNumber: document.querySelector("#selectedNumber"),
  selectedDescription: document.querySelector("#selectedDescription"),
  selectedMeter: document.querySelector("#selectedMeter"),
  selectedProgress: document.querySelector("#selectedProgress"),
  startFull: document.querySelector("#startFull"),
  startQuick: document.querySelector("#startQuick"),
  startMix: document.querySelector("#startMix"),
  startReview: document.querySelector("#startReview"),
  reviewCount: document.querySelector("#reviewCount"),
  startFlagged: document.querySelector("#startFlagged"),
  flaggedCount: document.querySelector("#flaggedCount"),
  startWeak: document.querySelector("#startWeak"),
  weakLabel: document.querySelector("#weakLabel"),
  startExam: document.querySelector("#startExam"),
  examTimer: document.querySelector("#examTimer"),
  examTime: document.querySelector("#examTime"),
  flagQuestion: document.querySelector("#flagQuestion"),
  resultBreakdown: document.querySelector("#resultBreakdown"),
  resultRingLabel: document.querySelector("#resultRingLabel"),
  skipQuestion: document.querySelector("#skipQuestion"),
  quizCategory: document.querySelector("#quizCategory"),
  quizCounter: document.querySelector("#quizCounter"),
  quizScore: document.querySelector("#quizScore"),
  quizProgressBar: document.querySelector("#quizProgressBar"),
  questionSheet: document.querySelector("#questionSheet"),
  questionType: document.querySelector("#questionType"),
  questionId: document.querySelector("#questionId"),
  questionText: document.querySelector("#questionText"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  questionSources: document.querySelector("#questionSources"),
  nextQuestion: document.querySelector("#nextQuestion"),
  exitQuiz: document.querySelector("#exitQuiz"),
  resultPercent: document.querySelector("#resultPercent"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  repeatQuiz: document.querySelector("#repeatQuiz"),
  returnHome: document.querySelector("#returnHome"),
  themeToggle: document.querySelector("#themeToggle"),
  themeLabel: document.querySelector("#themeLabel"),
  sourcesButton: document.querySelector("#sourcesButton"),
  sourcesDialog: document.querySelector("#sourcesDialog"),
  sourceList: document.querySelector("#sourceList"),
  aboutButton: document.querySelector("#aboutButton"),
  aboutDialog: document.querySelector("#aboutDialog"),
  toast: document.querySelector("#toast"),
};

let selectedCategory = CATEGORY_META[0].id;
let session = null;
let toastTimer = null;

/* ---------------------------------------------------------------------------
   Stav učení. Pro každou potkanou otázku držíme Leitnerovu přihrádku a datum
   dalšího opakování, počet chyb, příznak označení a informaci, zda ji uchazeč
   už někdy zvládl. Agregáty po kategoriích slouží k hledání slabých míst.
   --------------------------------------------------------------------------- */

function emptyState() {
  return { v: 2, q: {}, cat: {} };
}

function migrateLegacyState(validIds) {
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY));
    if (!legacy || !Array.isArray(legacy.mastered)) return null;
    const state = emptyState();
    const day = todayIndex();
    for (const id of legacy.mastered) {
      if (validIds.has(id)) state.q[id] = { b: 1, d: day + BOX_INTERVALS[1], w: 0, f: 0, m: 1 };
    }
    for (const id of Array.isArray(legacy.struggled) ? legacy.struggled : []) {
      if (!validIds.has(id)) continue;
      const known = state.q[id];
      state.q[id] = { b: 0, d: day, w: 1, f: 0, m: known ? 1 : 0 };
    }
    return state;
  } catch {
    return null;
  }
}

function loadState() {
  const validIds = new Set(questionBank.map((question) => question.id));
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && parsed.v === 2 && parsed.q) {
      const state = emptyState();
      for (const [id, entry] of Object.entries(parsed.q)) {
        if (!validIds.has(id) || typeof entry !== "object") continue;
        state.q[id] = {
          b: Math.min(5, Math.max(0, Number(entry.b) || 0)),
          d: Number(entry.d) || 0,
          w: Math.max(0, Number(entry.w) || 0),
          f: entry.f ? 1 : 0,
          m: entry.m ? 1 : 0,
        };
      }
      for (const category of CATEGORY_META) {
        const pair = parsed.cat?.[category.id];
        if (Array.isArray(pair) && pair.length === 2) {
          state.cat[category.id] = [Math.max(0, Number(pair[0]) || 0), Math.max(0, Number(pair[1]) || 0)];
        }
      }
      return state;
    }
    const migrated = migrateLegacyState(validIds);
    if (migrated) return migrated;
  } catch {
    // Poškozený nebo nedostupný stav znamená čistý start, ne pád aplikace.
  }
  return emptyState();
}

let persistedState = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
  } catch {
    showToast("Postup se v tomto prohlížeči nepodařilo uložit.");
  }
}

const entryFor = (id) => persistedState.q[id];
const isMastered = (id) => entryFor(id)?.m === 1;
const isFlagged = (id) => entryFor(id)?.f === 1;
const isStruggling = (id) => { const e = entryFor(id); return Boolean(e) && e.w > 0 && e.b === 0; };
const masteredCount = () => Object.values(persistedState.q).filter((entry) => entry.m === 1).length;
const struggledIds = () => Object.keys(persistedState.q).filter((id) => isStruggling(id));
const flaggedIds = () => Object.keys(persistedState.q).filter((id) => isFlagged(id));

function ensureEntry(id) {
  if (!persistedState.q[id]) persistedState.q[id] = newEntry(todayIndex());
  return persistedState.q[id];
}

function recordWrongAttempt(question) {
  persistedState.q[question.id] = applyWrong(ensureEntry(question.id), todayIndex());
  saveState();
}

function recordResolved(question, firstTry) {
  persistedState.q[question.id] = applyCorrect(ensureEntry(question.id), todayIndex(), firstTry);
  const stats = persistedState.cat[question.category] ?? [0, 0];
  stats[0] += 1;
  if (firstTry) stats[1] += 1;
  persistedState.cat[question.category] = stats;
  saveState();
}

function toggleFlag(question) {
  const entry = ensureEntry(question.id);
  entry.f = entry.f ? 0 : 1;
  saveState();
  return entry.f === 1;
}

/* Úspěšnost napoprvé po kategoriích; bez dat vrací null, aby se nehádalo. */
function categorySuccess(categoryId) {
  const stats = persistedState.cat[categoryId];
  if (!stats || stats[0] < 5) return null;
  return stats[1] / stats[0];
}

function weakestCategory() {
  const scored = CATEGORY_META.map((category) => ({ category, rate: categorySuccess(category.id) }))
    .filter((item) => item.rate !== null);
  if (scored.length === 0) return null;
  return scored.reduce((worst, item) => (item.rate < worst.rate ? item : worst)).category;
}

function secureRandomIndex(maxExclusive) {
  if (maxExclusive <= 1) return 0;
  if (!globalThis.crypto?.getRandomValues) return Math.floor(Math.random() * maxExclusive);
  const maxUint = 0x100000000;
  const limit = maxUint - (maxUint % maxExclusive);
  const value = new Uint32Array(1);
  do {
    crypto.getRandomValues(value);
  } while (value[0] >= limit);
  return value[0] % maxExclusive;
}

function shuffle(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = secureRandomIndex(index + 1);
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function masteredForCategory(categoryId) {
  const ids = new Set(questionsByCategory[categoryId].map((question) => question.id));
  return [...ids].filter((id) => isMastered(id)).length;
}

function renderCategoryNav() {
  elements.categoryNav.replaceChildren();
  CATEGORY_META.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-button";
    button.type = "button";
    button.dataset.category = category.id;
    button.setAttribute("aria-current", String(category.id === selectedCategory));
    button.setAttribute("aria-label", `${category.index}. ${category.title}`);

    const index = document.createElement("span");
    index.className = "category-index";
    index.textContent = String(category.index).padStart(2, "0");

    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = category.title;

    const progress = document.createElement("span");
    progress.className = "category-dot";
    const mastered = masteredForCategory(category.id);
    if (mastered === questionsByCategory[category.id].length) {
      progress.classList.add("complete");
      progress.textContent = "✓";
    }
    progress.setAttribute("aria-label", `${mastered} ze ${questionsByCategory[category.id].length} zvládnuto`);

    button.append(index, name, progress);
    button.addEventListener("click", () => selectCategory(category.id));
    elements.categoryNav.append(button);
  });
}

function selectCategory(categoryId) {
  selectedCategory = categoryId;
  const category = CATEGORY_META.find((item) => item.id === categoryId);
  const mastered = masteredForCategory(categoryId);
  document.querySelectorAll(".category-button").forEach((button) => {
    button.setAttribute("aria-current", String(button.dataset.category === categoryId));
  });
  elements.startTitle.textContent = category.title;
  elements.selectedNumber.textContent = String(category.index).padStart(2, "0");
  elements.selectedDescription.textContent = category.description;
  elements.selectedProgress.textContent = `${mastered} / ${questionsByCategory[selectedCategory].length} zvládnuto`;
  elements.selectedMeter.max = questionsByCategory[selectedCategory].length;
  elements.selectedMeter.value = mastered;
  elements.selectedMeter.textContent = `${mastered} %`;
}

function updateReviewButton() {
  const review = struggledIds().length;
  elements.startReview.hidden = review === 0;
  elements.reviewCount.textContent = String(review);

  const flagged = flaggedIds().length;
  elements.startFlagged.hidden = flagged === 0;
  elements.flaggedCount.textContent = String(flagged);

  const weakest = weakestCategory();
  elements.startWeak.hidden = weakest === null;
  if (weakest) {
    const rate = Math.round(categorySuccess(weakest.id) * 100);
    elements.weakLabel.textContent = `${weakest.title} · ${rate} %`;
    elements.startWeak.dataset.category = weakest.id;
  }
}

function updateProgressUi() {
  const mastered = masteredCount();
  elements.overallProgress.textContent = `${mastered.toLocaleString("cs-CZ")} / ${questionBank.length.toLocaleString("cs-CZ")}`;
  renderCategoryNav();
  updateReviewButton();
  selectCategory(selectedCategory);
}

/* Pořadí studia: po termínu, pak neviděné, nakonec naplánované dopředu. */
function studyOrder(pool) {
  return orderByDue(shuffle(pool), persistedState.q, todayIndex());
}

function balancedMix(count) {
  const pools = Object.fromEntries(
    CATEGORY_META.map((category) => [category.id, studyOrder(questionsByCategory[category.id])]),
  );
  const categoryOrder = shuffle(CATEGORY_META.map((category) => category.id));
  const selected = [];
  let round = 0;
  while (selected.length < count) {
    const categoryId = categoryOrder[selected.length % categoryOrder.length];
    const question = pools[categoryId][round];
    if (question) selected.push(question);
    if (selected.length % categoryOrder.length === 0) round += 1;
    if (round > count) break;
  }
  return shuffle(selected);
}

function pickQuestions(categoryId, count) {
  return studyOrder(questionsByCategory[categoryId]).slice(0, count);
}

/* Zkouškový nácvik: pět otázek z každé kompetence, tedy 55 dohromady. */
const EXAM_PER_CATEGORY = 5;

function examQuestions() {
  const picked = CATEGORY_META.flatMap((category) =>
    shuffle(questionsByCategory[category.id]).slice(0, EXAM_PER_CATEGORY),
  );
  return shuffle(picked);
}

function flaggedQuestions(limit) {
  const ids = new Set(flaggedIds());
  return shuffle(questionBank.filter((question) => ids.has(question.id))).slice(0, limit);
}

function struggledQuestions(limit) {
  const ids = new Set(struggledIds());
  return shuffle(questionBank.filter((question) => ids.has(question.id))).slice(0, limit);
}

function startQuiz(mode, categoryId = selectedCategory) {
  let questions;
  let title;
  if (mode === "mix") {
    questions = balancedMix(60);
    title = "Mix všech oblastí";
  } else if (mode === "review") {
    questions = struggledQuestions(60);
    title = "Opakování chyb";
  } else if (mode === "flagged") {
    questions = flaggedQuestions(60);
    title = "Označené otázky";
  } else if (mode === "exam") {
    questions = examQuestions();
    title = "Zkouškový režim";
  } else {
    const count = mode === "quick" ? 20 : questionsByCategory[categoryId].length;
    questions = pickQuestions(categoryId, count);
    title = CATEGORY_META.find((category) => category.id === categoryId).title;
  }

  if (questions.length === 0) {
    showToast("Pro tento režim zatím nejsou žádné otázky.");
    return;
  }

  session = {
    mode,
    categoryId,
    title,
    questions,
    index: 0,
    firstTryCorrect: 0,
    hadWrongAttempt: false,
    phase: "asking",
    skipped: new Set(),
    isExam: mode === "exam",
    answers: [],
    startedAt: Date.now(),
  };

  elements.welcomeView.hidden = true;
  elements.resultView.hidden = true;
  elements.quizView.hidden = false;
  elements.quizCategory.textContent = title;
  startExamTimer();
  renderQuestion();
  document.querySelector("#main").focus({ preventScroll: true });
}

function recordExamAnswer(question, correct) {
  session.answers.push({ id: question.id, category: question.category, correct });
  if (correct) {
    session.firstTryCorrect += 1;
    bumpScore();
    recordResolved(question, true);
  } else {
    recordWrongAttempt(question);
  }
  elements.quizScore.textContent = String(session.firstTryCorrect);
  updateProgressUi();
}

let examTimerId = null;

function stopExamTimer() {
  window.clearInterval(examTimerId);
  examTimerId = null;
}

function startExamTimer() {
  stopExamTimer();
  elements.examTimer.hidden = !session.isExam;
  if (!session.isExam) return;
  const tick = () => {
    const seconds = Math.floor((Date.now() - session.startedAt) / 1000);
    elements.examTime.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  };
  tick();
  examTimerId = window.setInterval(tick, 1000);
}

/* Jediný zdroj pravdy o fázi otázky. Tlačítka se odvozují od něj, takže se
   stav session a to, co je vidět, nemohou rozejít. */
function setPhase(phase) {
  session.phase = phase;
  const asking = phase === "asking";
  elements.skipQuestion.hidden = !asking;
  elements.nextQuestion.hidden = phase !== "answered";
}

const isAsking = () => session?.phase === "asking";
const isAnswered = () => session?.phase === "answered";

function renderQuestion() {
  const question = session.questions[session.index];
  session.hadWrongAttempt = false;
  setPhase("asking");
  elements.quizCounter.textContent = `Otázka ${session.index + 1} z ${session.questions.length}`;
  elements.quizScore.textContent = String(session.firstTryCorrect);
  const progress = (session.index / session.questions.length) * 100;
  elements.quizProgressBar.value = progress;
  elements.quizProgressBar.textContent = `${Math.round(progress)} %`;
  elements.questionType.textContent = question.type;
  elements.questionId.textContent = question.id;
  elements.questionText.textContent = question.prompt;
  elements.answers.replaceChildren();
  elements.feedback.hidden = true;
  elements.feedback.className = "feedback";
  elements.questionSources.replaceChildren();
  elements.flagQuestion.setAttribute("aria-pressed", String(isFlagged(question.id)));
  elements.flagQuestion.classList.toggle("is-on", isFlagged(question.id));

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.dataset.index = String(index);

    const key = document.createElement("span");
    key.className = "answer-key";
    key.textContent = String.fromCharCode(65 + index);

    const label = document.createElement("span");
    label.className = "answer-label";
    label.textContent = option;

    button.append(key, label);
    button.style.setProperty("--i", String(index));
    button.addEventListener("click", () => checkAnswer(button, index));
    elements.answers.append(button);
  });

  elements.questionSheet.classList.remove("is-entering");
  requestAnimationFrame(() => elements.questionSheet.classList.add("is-entering"));
  window.setTimeout(() => elements.answers.querySelector("button")?.focus({ preventScroll: true }), 80);
}

function checkAnswer(button, selectedIndex) {
  if (!isAsking() || button.disabled) return;
  const question = session.questions[session.index];

  if (session.isExam) {
    recordExamAnswer(question, selectedIndex === question.correctIndex);
    button.classList.add("is-chosen");
    [...elements.answers.querySelectorAll("button")].forEach((answer) => { answer.disabled = true; });
    setPhase("answered");
    elements.nextQuestion.textContent = session.index === session.questions.length - 1 ? "Vyhodnotit" : "Další otázka";
    elements.nextQuestion.focus({ preventScroll: true });
    return;
  }

  if (selectedIndex !== question.correctIndex) {
    session.hadWrongAttempt = true;
    recordWrongAttempt(question);
    button.disabled = true;
    button.classList.add("is-wrong");
    elements.feedback.hidden = false;
    elements.feedback.className = "feedback wrong";
    elements.feedbackTitle.textContent = "To není správně.";
    elements.feedbackText.textContent = "Zkuste jinou možnost.";
    elements.questionSources.replaceChildren();
    window.setTimeout(() => {
      button.classList.remove("is-wrong");
      const nextAvailable = [...elements.answers.querySelectorAll("button")].find((item) => !item.disabled);
      nextAvailable?.focus({ preventScroll: true });
    }, 420);
    return;
  }

  setPhase("answered");
  if (!session.hadWrongAttempt) {
    session.firstTryCorrect += 1;
    bumpScore();
  }
  [...elements.answers.querySelectorAll("button")].forEach((answer, index) => {
    answer.disabled = true;
    if (index === question.correctIndex) answer.classList.add("is-correct");
  });

  elements.quizScore.textContent = String(session.firstTryCorrect);
  elements.feedback.hidden = false;
  elements.feedback.className = "feedback correct";
  elements.feedbackTitle.textContent = "Správně.";
  elements.feedbackText.textContent = question.explanation;
  elements.questionSources.replaceChildren();
  question.sources.forEach((sourceId) => {
    const source = SOURCES[sourceId];
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.organization;
    link.setAttribute("aria-label", `Otevřít zdroj: ${source.title}`);
    elements.questionSources.append(link);
  });

  recordResolved(question, !session.hadWrongAttempt);
  updateProgressUi();

  elements.nextQuestion.textContent = session.index === session.questions.length - 1 ? "Dokončit sérii" : "Další otázka";
  elements.nextQuestion.focus({ preventScroll: true });
}

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function bumpScore() {
  const pill = elements.quizScore.closest(".score-pill");
  if (!pill || prefersReducedMotion()) return;
  pill.classList.remove("is-bumped");
  requestAnimationFrame(() => pill.classList.add("is-bumped"));
}

function countUp(element, target) {
  // Výsledná hodnota je vidět i tehdy, když prohlížeč animační snímky nedoručí
  // (běh na pozadí, úsporný režim). Animace je jen nadstavba.
  element.textContent = `${target} %`;
  if (prefersReducedMotion()) return;
  const duration = 750;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - t) ** 3;
    element.textContent = `${Math.round(target * eased)} %`;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function transitionToQuestion() {
  const sheet = elements.questionSheet;
  if (prefersReducedMotion()) {
    renderQuestion();
    sheet.scrollIntoView({ behavior: "auto", block: "nearest" });
    return;
  }
  sheet.classList.remove("is-entering");
  sheet.classList.add("is-leaving");
  window.setTimeout(() => {
    sheet.classList.remove("is-leaving");
    renderQuestion();
    sheet.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 200);
}

/* Přeskočení posune sérii dál a otázku uloží do opakování chyb — počítadlo
   se tak chová stejně jako po odpovědi a série se nikdy nezacyklí. */
function skipQuestion() {
  if (!isAsking()) return;
  const question = session.questions[session.index];
  session.skipped.add(question.id);

  // Ve zkoušce se nezodpovězená otázka počítá jako chyba, jinde jen míří do opakování.
  if (session.isExam) session.answers.push({ id: question.id, category: question.category, correct: false });
  recordWrongAttempt(question);
  updateReviewButton();

  setPhase("answered");
  showToast("Přeskočeno — otázka se vrátí v opakování chyb.");
  goToNextQuestion();
}

function goToNextQuestion() {
  if (!isAnswered()) return;
  setPhase("moving");
  if (session.index === session.questions.length - 1) {
    finishQuiz();
    return;
  }
  session.index += 1;
  transitionToQuestion();
}

function renderBreakdown(rows) {
  elements.resultBreakdown.replaceChildren();
  if (rows.length === 0) {
    elements.resultBreakdown.hidden = true;
    return;
  }
  for (const row of rows) {
    const item = document.createElement("div");
    item.className = row.rate < EXAM_PER_AREA ? "breakdown-row is-below" : "breakdown-row";
    const name = document.createElement("span");
    name.textContent = row.category.title;
    const score = document.createElement("strong");
    score.textContent = `${row.correct}/${row.total}`;
    const rate = document.createElement("span");
    rate.className = "breakdown-rate";
    rate.textContent = `${Math.round(row.rate * 100)} %`;
    item.append(name, score, rate);
    elements.resultBreakdown.append(item);
  }
  elements.resultBreakdown.hidden = false;
}

function finishExam() {
  const result = evaluateExam(session.answers, CATEGORY_META);
  const minutes = Math.round((Date.now() - session.startedAt) / 60000);
  const percent = Math.round(result.overall * 100);
  countUp(elements.resultPercent, percent);
  elements.resultTitle.textContent = result.passed ? "Prošli byste." : "Zatím by to nestačilo.";

  const timeNote = minutes < 1 ? "" : ` Zabralo to ${minutes} ${minutes === 1 ? "minutu" : minutes < 5 ? "minuty" : "minut"}.`;
  const failNote = result.failing.length === 0
    ? " Žádná oblast neklesla pod 60 %."
    : ` Pod 60 % zůstaly tyto oblasti: ${result.failing.map((row) => row.category.title).join(", ")}.`;
  elements.resultSummary.textContent =
    `Správně ${result.correct} z ${result.total} otázek, tedy ${percent} %. Hranice je 70 % celkem a 60 % v každé oblasti.${failNote}${timeNote}`;

  renderBreakdown(result.perCategory);
}

function finishQuiz() {
  stopExamTimer();
  elements.quizView.hidden = true;
  elements.resultView.hidden = false;

  elements.resultRingLabel.textContent = session.isExam ? "úspěšnost" : "na první pokus";
  if (session.isExam) {
    finishExam();
  } else {
    const percent = Math.round((session.firstTryCorrect / session.questions.length) * 100);
    countUp(elements.resultPercent, percent);
    elements.resultTitle.textContent = percent >= 90 ? "Výborná jistota." : percent >= 70 ? "Pevný základ." : "Je na čem stavět.";
    const skippedCount = session.skipped.size;
    const skippedWord = skippedCount === 1 ? "jednu otázku" : skippedCount < 5 ? `${skippedCount} otázky` : `${skippedCount} otázek`;
    const skippedNote = skippedCount === 0 ? "" : ` Přeskočili jste ${skippedWord}; najdete je v opakování chyb.`;
    elements.resultSummary.textContent = `Na první pokus jste správně vyřešili ${session.firstTryCorrect} z ${session.questions.length} otázek.${skippedNote}`;
    renderBreakdown([]);
  }

  elements.resultView.scrollIntoView({ behavior: "smooth", block: "nearest" });
  elements.repeatQuiz.focus({ preventScroll: true });
}

function returnHome() {
  stopExamTimer();
  elements.quizView.hidden = true;
  elements.resultView.hidden = true;
  elements.welcomeView.hidden = false;
  updateProgressUi();
  document.querySelector("#welcomeTitle").focus?.({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  elements.themeLabel.textContent = THEME_LABELS[theme];
  elements.themeToggle.setAttribute("aria-label", `Barevný režim: ${THEME_LABELS[theme]}. Změnit.`);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // The selected theme still applies for the current page.
  }
}

function cycleTheme() {
  const current = document.documentElement.dataset.theme || "auto";
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  applyTheme(next);
  showToast(`Barevný režim: ${THEME_LABELS[next]}`);
}

function renderSources() {
  elements.sourceList.replaceChildren();
  Object.entries(SOURCES).forEach(([sourceId, source], index) => {
    const item = document.createElement("div");
    item.className = "source-item";
    item.dataset.source = sourceId;

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const copy = document.createElement("div");
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.title;
    const organization = document.createElement("p");
    organization.textContent = source.organization;
    copy.append(link, organization);
    item.append(number, copy);
    elements.sourceList.append(item);
  });
}

function setupDialogs() {
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
  elements.sourcesButton.addEventListener("click", () => elements.sourcesDialog.showModal());
  elements.aboutButton.addEventListener("click", () => elements.aboutDialog.showModal());
}

/* Švihnutí vlevo posune na další otázku, jakmile je zodpovězená. */
function setupSwipeNavigation() {
  let startX = 0;
  let startY = 0;
  let tracking = false;

  elements.questionSheet.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;
    tracking = true;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, { passive: true });

  elements.questionSheet.addEventListener("touchend", (event) => {
    if (!tracking) return;
    tracking = false;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (dx < -70 && Math.abs(dx) > Math.abs(dy) * 1.8 && isAnswered()) {
      goToNextQuestion();
    }
  }, { passive: true });
}

function init() {
  let storedTheme = "auto";
  try {
    const candidate = localStorage.getItem(THEME_KEY);
    if (THEMES.includes(candidate)) storedTheme = candidate;
  } catch {
    // Automatic theme remains available when storage is blocked.
  }
  applyTheme(storedTheme);
  // Postup z předchozí verze uložíme rovnou v novém formátu, ať se migrace
  // neopakuje při každém načtení.
  try {
    if (!localStorage.getItem(STORAGE_KEY) && localStorage.getItem(LEGACY_KEY)) saveState();
  } catch {
    // Bez úložiště se jen pokračuje bez ukládání.
  }
  renderSources();
  setupDialogs();
  setupSwipeNavigation();
  updateProgressUi();

  elements.startFull.addEventListener("click", () => startQuiz("full"));
  elements.startReview.addEventListener("click", () => startQuiz("review"));
  elements.startFlagged.addEventListener("click", () => startQuiz("flagged"));
  elements.startExam.addEventListener("click", () => startQuiz("exam"));
  elements.startWeak.addEventListener("click", () => {
    const categoryId = elements.startWeak.dataset.category;
    if (!categoryId) return;
    selectCategory(categoryId);
    startQuiz("quick", categoryId);
  });
  elements.flagQuestion.addEventListener("click", () => {
    if (!session) return;
    const question = session.questions[session.index];
    const on = toggleFlag(question);
    elements.flagQuestion.setAttribute("aria-pressed", String(on));
    elements.flagQuestion.classList.toggle("is-on", on);
    updateReviewButton();
    showToast(on ? "Otázka označena." : "Označení zrušeno.");
  });
  elements.skipQuestion.addEventListener("click", skipQuestion);
  elements.startQuick.addEventListener("click", () => startQuiz("quick"));
  elements.startMix.addEventListener("click", () => startQuiz("mix"));
  elements.nextQuestion.addEventListener("click", goToNextQuestion);
  elements.exitQuiz.addEventListener("click", returnHome);
  elements.returnHome.addEventListener("click", returnHome);
  elements.repeatQuiz.addEventListener("click", () => startQuiz(session.mode, session.categoryId));
  elements.themeToggle.addEventListener("click", cycleTheme);

  document.addEventListener("keydown", (event) => {
    if (elements.quizView.hidden || document.querySelector("dialog[open]")) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const letterIndex = "abcd".indexOf(event.key.toLowerCase());
    const digitIndex = /^[1-4]$/.test(event.key) ? Number(event.key) - 1 : -1;
    const index = letterIndex >= 0 ? letterIndex : digitIndex;
    if (index >= 0 && isAsking()) {
      const target = elements.answers.querySelectorAll("button")[index];
      if (target && !target.disabled) {
        event.preventDefault();
        target.click();
      }
    } else if ((event.key === "Enter" || event.key === "ArrowRight") && isAnswered()) {
      event.preventDefault();
      goToNextQuestion();
    } else if (event.key.toLowerCase() === "s" && isAsking()) {
      event.preventDefault();
      skipQuestion();
    } else if (event.key.toLowerCase() === "f" && session) {
      event.preventDefault();
      elements.flagQuestion.click();
    }
  });
}

init();

window.__quizDebug = Object.freeze({
  categoryCount: CATEGORY_META.length,
  questionCount: questionBank.length,
  perCategory: Object.fromEntries(CATEGORY_META.map((category) => [category.id, questionsByCategory[category.id].length])),
});
