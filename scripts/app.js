const form = document.getElementById("versus-form");
const revealButton = document.getElementById("reveal-category");
const overlay = document.getElementById("versus-overlay");
const overlayPlayerOne = document.getElementById("overlay-player-one");
const overlayPlayerTwo = document.getElementById("overlay-player-two");
const categoryTitle = document.getElementById("category-title");
const cards = Array.from(document.querySelectorAll("[data-card]"));
const cardLabels = Array.from(document.querySelectorAll("[data-card-label]"));

const configCategories = window.QUIZ_BATTLE_CONFIG?.categories || Object.keys(window.QUIZ_BATTLE_CONFIG?.cardLabelsByCategory || {}) || ["Science & Discovery"];
const cardLabelsByCategory = window.QUIZ_BATTLE_CONFIG?.cardLabelsByCategory || {};
const defaultCategory = configCategories[0];
const revealDelay = 420;
const currentSetup = JSON.parse(window.sessionStorage.getItem("quizBattleSetup") || "{}");
const categoryName = currentSetup.category || defaultCategory;
const selectedCardLabels = cardLabelsByCategory[categoryName] || [];

let cardsRevealed = false;
let selectedCardIndex = -1;

categoryTitle.textContent = categoryName;
cardLabels.forEach((label, index) => {
  label.textContent = selectedCardLabels[index] || categoryName;
});

// ── Restore revealed/selected state when returning from play ──────────────────
const returnedFromPlay = window.sessionStorage.getItem("returnedFromPlay") === "1";
window.sessionStorage.removeItem("returnedFromPlay");

if (returnedFromPlay && currentSetup.cardsRevealed) {
  cardsRevealed = true;
  cards.forEach((card) => card.classList.add("is-revealed", "is-selectable"));

  const savedIndex = currentSetup.selectedCardIndex ?? -1;
  if (savedIndex !== -1 && cards[savedIndex]) {
    selectedCardIndex = savedIndex;
    cards[savedIndex].classList.add("is-selected");
  }
}

// ── Restore player names ──────────────────────────────────────────────────────
if (returnedFromPlay) {
  if (currentSetup.playerOne) document.getElementById("player-one").value = currentSetup.playerOne;
  if (currentSetup.playerTwo) document.getElementById("player-two").value = currentSetup.playerTwo;
}

const saveCardState = () => {
  window.sessionStorage.setItem(
    "quizBattleSetup",
    JSON.stringify({ ...JSON.parse(window.sessionStorage.getItem("quizBattleSetup") || "{}"), cardsRevealed, selectedCardIndex })
  );
};

const resetCards = () => {
  cardsRevealed = false;
  selectedCardIndex = -1;
  cards.forEach((card) => {
    card.classList.remove("is-dusting", "is-revealed", "is-selected", "is-selectable");
  });
  saveCardState();
};

const revealCards = () => {
  cards.forEach((card, index) => {
    window.setTimeout(() => {
      card.classList.add("is-dusting");

      window.setTimeout(() => {
        card.classList.remove("is-dusting");
        card.classList.add("is-revealed");
      }, revealDelay);
    }, 180 * index);
  });

  const totalDelay = (cards.length - 1) * 180 + revealDelay;
  window.setTimeout(() => {
    cardsRevealed = true;
    cards.forEach((card) => card.classList.add("is-selectable"));
    saveCardState();
  }, totalDelay + 50);
};

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    if (!cardsRevealed) return;

    if (selectedCardIndex === index) {
      card.classList.remove("is-selected");
      selectedCardIndex = -1;
    } else {
      if (selectedCardIndex !== -1) {
        cards[selectedCardIndex].classList.remove("is-selected");
      }
      card.classList.add("is-selected");
      selectedCardIndex = index;
    }
    saveCardState();
  });
});

revealButton.addEventListener("click", () => {
  resetCards();
  revealCards();
});

const showVersusOverlay = (playerOne, playerTwo) => {
  overlayPlayerOne.textContent = playerOne;
  overlayPlayerTwo.textContent = playerTwo;
  overlay.classList.add("is-visible");
  overlay.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    window.location.href = "play.html";
  }, 1900);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const playerOne = (formData.get("playerOne") || "").toString().trim();
  const playerTwo = (formData.get("playerTwo") || "").toString().trim();

  if (!playerOne || !playerTwo) {
    return;
  }

  const roundLabel =
    selectedCardIndex !== -1
      ? selectedCardLabels[selectedCardIndex] || categoryName
      : null;

  window.sessionStorage.setItem(
    "quizBattleSetup",
    JSON.stringify({
      ...JSON.parse(window.sessionStorage.getItem("quizBattleSetup") || "{}"),
      playerOne,
      playerTwo,
      category: categoryName,
      ...(roundLabel !== null && { round: roundLabel })
    })
  );

  showVersusOverlay(playerOne, playerTwo);
});