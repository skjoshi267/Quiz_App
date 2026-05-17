const setup = JSON.parse(window.sessionStorage.getItem("quizBattleSetup") || "{}");
const defaultCategory = window.QUIZ_BATTLE_CONFIG?.categories?.[0] || Object.keys(window.QUIZ_BATTLE_CONFIG?.cardLabelsByCategory || {})[0] || "Science & Discovery";

document.getElementById("play-player-one").textContent = setup.playerOne || "Player One";
document.getElementById("play-player-two").textContent = setup.playerTwo || "Player Two";
document.getElementById("play-title").textContent = setup.round || setup.category || defaultCategory;

// ── Round description ─────────────────────────────────────────────────────────
const roundDescEl   = document.getElementById("round-description");
const roundDescPill = document.getElementById("play-description-pill");
const roundDesc =
  window.QUIZ_BATTLE_CONFIG?.roundDescriptionByLabel?.[setup.category]?.[setup.round] || "";
if (roundDescEl) {
  roundDescEl.textContent = roundDesc;
  roundDescEl.hidden      = !roundDesc;
}
if (roundDescPill) roundDescPill.hidden = !roundDesc;

// ── Timer for image-blur countdown ────────────────────────────────────────────
let _timerInterval = null;
let _timerRemaining = 0;
let _timerPaused    = false;

const _timerEls = () => ({
  countEl: document.getElementById("timer-count"),
  barEl:   document.getElementById("timer-bar"),
  img:     document.getElementById("question-img"),
  btn:     document.getElementById("timer-pause-btn"),
});

const startCountdown = (seconds) => {
  clearInterval(_timerInterval);
  _timerRemaining = seconds;
  _timerPaused    = false;

  const { countEl, barEl, img, btn } = _timerEls();
  if (countEl) countEl.textContent = _timerRemaining;
  if (btn)   { btn.textContent = "\u23f8"; btn.dataset.state = "playing"; }

  if (barEl) {
    barEl.style.animationPlayState = "running";
    barEl.style.animation = "none";
    barEl.offsetHeight; // force reflow
    barEl.style.animation = `timer-shrink ${seconds}s linear forwards`;
  }
  if (img) img.style.animationPlayState = "running";

  _timerInterval = setInterval(() => {
    _timerRemaining -= 1;
    if (countEl) countEl.textContent = Math.max(_timerRemaining, 0);
    if (_timerRemaining <= 0) clearInterval(_timerInterval);
  }, 1000);
};

// Pause / resume button
document.getElementById("timer-pause-btn")?.addEventListener("click", () => {
  const { countEl, barEl, img, btn } = _timerEls();

  if (_timerPaused) {
    // ── Resume ────────────────────────────────────────────────────────────────
    _timerPaused = false;
    if (barEl) barEl.style.animationPlayState = "running";
    if (img)   img.style.animationPlayState   = "running";
    if (btn)   { btn.textContent = "\u23f8"; btn.dataset.state = "playing"; }
    _timerInterval = setInterval(() => {
      _timerRemaining -= 1;
      if (countEl) countEl.textContent = Math.max(_timerRemaining, 0);
      if (_timerRemaining <= 0) clearInterval(_timerInterval);
    }, 1000);
  } else {
    // ── Pause ─────────────────────────────────────────────────────────────────
    _timerPaused = true;
    clearInterval(_timerInterval);
    if (barEl) barEl.style.animationPlayState = "paused";
    if (img)   img.style.animationPlayState   = "paused";
    if (btn)   { btn.textContent = "\u25b6"; btn.dataset.state = "paused"; }
  }
});

// ── setQuestion ────────────────────────────────────────────────────────────────
const setQuestion = (type, content) => {
  const card = document.getElementById("question-card");
  if (!card) return;

  // Normalise legacy "image" alias
  const state = type === "image" ? "img" : type;
  card.dataset.state = state;

  if (state === "text") {
    document.getElementById("question-text").textContent = content || "";

  } else if (state === "markdown") {
    const el = document.getElementById("question-markdown");
    el.innerHTML = typeof marked !== "undefined"
      ? marked.parse(content || "")
      : `<p>${(content || "").replace(/\n/g, "<br>")}</p>`;

  } else if (state === "img") {
    const img = document.getElementById("question-img");
    img.classList.remove("is-unblurring");
    img.src = (content && content.src) ? content.src : String(content);
    img.alt = (content && content.alt) ? content.alt : "Question image";

    const kick = () => { img.classList.add("is-unblurring"); startCountdown(15); };
    if (img.complete && img.naturalWidth) { kick(); }
    else { img.onload = kick; }

  } else if (state === "audio") {
    document.getElementById("question-audio").src =
      (content && content.src) ? content.src : String(content);

  } else if (state === "video") {
    document.getElementById("question-video").src =
      (content && content.src) ? content.src : String(content);

  } else if (state === "article") {
    const text = content || "";
    document.getElementById("article-headline").textContent = text;
    const ticker = document.getElementById("article-ticker");
    ticker.textContent = `${text}  ·  ${text}  ·  ${text}`;
    // Restart ticker animation
    ticker.style.animation = "none";
    ticker.offsetHeight;
    ticker.style.animation = "";
  }
};

window.setQuestion = setQuestion;

// ── Path helpers ───────────────────────────────────────────────────────────────
const sanitizeForPath = (name) =>
  name.replace(/[/\\]/g, "-").replace(/[?!%*:|"<>]/g, "").trim();

const questionCategory = sanitizeForPath(setup.category || defaultCategory);
const questionRound    = sanitizeForPath(setup.round || setup.category || defaultCategory);

// URL-encode each segment so spaces / special chars survive the HTTP request
const questionsBaseURL =
  `../questions/${encodeURIComponent(questionCategory)}/${encodeURIComponent(questionRound)}`;

// ── Auto-fetch question file ───────────────────────────────────────────────────
// extensionFormat (from config) maps extension → display format
const extFormatMap  = window.QUIZ_BATTLE_CONFIG?.extensionFormat || {};
// extensionsByLabel (from config) declares priority extension order per label
const declaredExts  =
  window.QUIZ_BATTLE_CONFIG?.extensionsByLabel?.[setup.category]?.[setup.round] || [];

const allKnownExts  = Object.keys(extFormatMap);
const remainingExts = allKnownExts.filter(e => !declaredExts.includes(e));
const searchExts    = [...declaredExts, ...remainingExts];

(async () => {
  for (const ext of searchExts) {
    try {
      const displayType = extFormatMap[ext];
      if (!displayType) continue;
      const needsBody = displayType === "text" || displayType === "article" || displayType === "markdown";
      const res = await fetch(questionsBaseURL + ext, { method: needsBody ? "GET" : "HEAD" });

      if (res.ok) {
        setQuestion(displayType, needsBody
          ? (await res.text()).trim()
          : { src: questionsBaseURL + ext, alt: questionRound });
        return;
      }
    } catch (_) { /* try next extension */ }
  }
  // Nothing found — card stays on "waiting"
})();