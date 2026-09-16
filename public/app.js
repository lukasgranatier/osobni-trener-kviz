import { buildQuestionBank, CATEGORY_META, SOURCES } from "./data.js";

const STORAGE_KEY = "trener74-state-v1";
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

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed || !Array.isArray(parsed.mastered)) return { mastered: [] };
    const validIds = new Set(questionBank.map((question) => question.id));
    return { mastered: [...new Set(parsed.mastered.filter((id) => validIds.has(id)))] };
  } catch {
    return { mastered: [] };
  }
}

let persistedState = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
  } catch {
    showToast("Postup se v tomto prohlížeči nepodařilo uložit.");
  }
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
  return persistedState.mastered.filter((id) => ids.has(id)).length;
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

function updateProgressUi() {
  const mastered = persistedState.mastered.length;
  elements.overallProgress.textContent = `${mastered.toLocaleString("cs-CZ")} / ${questionBank.length.toLocaleString("cs-CZ")}`;
  renderCategoryNav();
  selectCategory(selectedCategory);
}

function balancedMix(count) {
  const pools = Object.fromEntries(
    CATEGORY_META.map((category) => [category.id, shuffle(questionsByCategory[category.id])]),
  );
  const categoryOrder = shuffle(CATEGORY_META.map((category) => category.id));
  const selected = [];
  let round = 0;
  while (selected.length < count) {
    const categoryId = categoryOrder[selected.length % categoryOrder.length];
    selected.push(pools[categoryId][round]);
    if (selected.length % categoryOrder.length === 0) round += 1;
  }
  return shuffle(selected);
}

function pickQuestions(categoryId, count) {
  const mastered = new Set(persistedState.mastered);
  const pool = shuffle(questionsByCategory[categoryId]);
  const unseen = pool.filter((question) => !mastered.has(question.id));
  const seen = pool.filter((question) => mastered.has(question.id));
  return [...unseen, ...seen].slice(0, count);
}

function startQuiz(mode, categoryId = selectedCategory) {
  let questions;
  let title;
  if (mode === "mix") {
    questions = balancedMix(30);
    title = "Mix všech oblastí";
  } else {
    const count = mode === "quick" ? 20 : questionsByCategory[categoryId].length;
    questions = pickQuestions(categoryId, count);
    title = CATEGORY_META.find((category) => category.id === categoryId).title;
  }

  session = {
    mode,
    categoryId,
    title,
    questions,
    index: 0,
    firstTryCorrect: 0,
    hadWrongAttempt: false,
    answered: false,
  };

  elements.welcomeView.hidden = true;
  elements.resultView.hidden = true;
  elements.quizView.hidden = false;
  elements.quizCategory.textContent = title;
  renderQuestion();
  document.querySelector("#main").focus({ preventScroll: true });
}

function renderQuestion() {
  const question = session.questions[session.index];
  session.hadWrongAttempt = false;
  session.answered = false;
  session.transitioning = false;
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
  elements.nextQuestion.hidden = true;
  elements.questionSources.replaceChildren();

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
  if (!session || session.answered || button.disabled) return;
  const question = session.questions[session.index];
  if (selectedIndex !== question.correctIndex) {
    session.hadWrongAttempt = true;
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

  session.answered = true;
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

  if (!persistedState.mastered.includes(question.id)) {
    persistedState.mastered.push(question.id);
    saveState();
    updateProgressUi();
  }

  elements.nextQuestion.hidden = false;
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

function goToNextQuestion() {
  if (!session?.answered || session.transitioning) return;
  session.transitioning = true;
  if (session.index === session.questions.length - 1) {
    finishQuiz();
    return;
  }
  session.index += 1;
  transitionToQuestion();
}

function finishQuiz() {
  const percent = Math.round((session.firstTryCorrect / session.questions.length) * 100);
  elements.quizView.hidden = true;
  elements.resultView.hidden = false;
  countUp(elements.resultPercent, percent);
  elements.resultTitle.textContent = percent >= 90 ? "Výborná jistota." : percent >= 70 ? "Pevný základ." : "Je na čem stavět.";
  elements.resultSummary.textContent = `Na první pokus jste správně vyřešili ${session.firstTryCorrect} z ${session.questions.length} otázek. Každou chybnou otázku jste nakonec zvládli správně.`;
  elements.resultView.scrollIntoView({ behavior: "smooth", block: "nearest" });
  elements.repeatQuiz.focus({ preventScroll: true });
}

function returnHome() {
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
    if (dx < -70 && Math.abs(dx) > Math.abs(dy) * 1.8 && !elements.nextQuestion.hidden) {
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
  renderSources();
  setupDialogs();
  setupSwipeNavigation();
  updateProgressUi();

  elements.startFull.addEventListener("click", () => startQuiz("full"));
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
    if (index >= 0 && !session?.answered) {
      const target = elements.answers.querySelectorAll("button")[index];
      if (target && !target.disabled) {
        event.preventDefault();
        target.click();
      }
    } else if ((event.key === "Enter" || event.key === "ArrowRight") && session?.answered) {
      event.preventDefault();
      goToNextQuestion();
    }
  });
}

init();

window.__quizDebug = Object.freeze({
  categoryCount: CATEGORY_META.length,
  questionCount: questionBank.length,
  perCategory: Object.fromEntries(CATEGORY_META.map((category) => [category.id, questionsByCategory[category.id].length])),
});
