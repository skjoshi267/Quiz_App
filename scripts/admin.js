const adminForm = document.getElementById("admin-form");
const categorySelect = document.getElementById("category-select");
const categoryPreview = document.getElementById("admin-category-preview");
const categoryTrigger = document.getElementById("category-trigger");
const categoryTriggerLabel = document.getElementById("category-trigger-label");
const categoryMenu = document.getElementById("category-menu");
const categoryShell = document.getElementById("category-select-shell");
const configCategories = window.QUIZ_BATTLE_CONFIG?.categories || Object.keys(window.QUIZ_BATTLE_CONFIG?.cardLabelsByCategory || {}) || ["Science & Discovery"];

const setMenuOpen = (isOpen) => {
  categoryShell.classList.toggle("is-open", isOpen);
  categoryTrigger.setAttribute("aria-expanded", String(isOpen));
};

const renderPreviewLabel = (category) => {
  categoryPreview.replaceChildren();

  const slashIndex = category.indexOf("/");

  if (slashIndex === -1) {
    categoryPreview.textContent = category;
    return;
  }

  const beforeSlash = category.slice(0, slashIndex);
  const fromSlash = category.slice(slashIndex);

  categoryPreview.append(document.createTextNode(beforeSlash));
  categoryPreview.append(document.createElement("br"));
  categoryPreview.append(document.createTextNode(fromSlash));
};

const updateAdminPreview = () => {
  renderPreviewLabel(categorySelect.value);
  categoryTriggerLabel.textContent = categorySelect.value;
};

const setSelectedCategory = (category) => {
  categorySelect.value = category;
  Array.from(categoryMenu.querySelectorAll("[role='option']")).forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.value === category));
  });
  updateAdminPreview();
};

configCategories.forEach((category) => {
  const option = document.createElement("button");
  option.type = "button";
  option.className = "custom-select-option";
  option.dataset.value = category;
  option.setAttribute("role", "option");
  option.textContent = category;
  option.addEventListener("click", () => {
    setSelectedCategory(category);
    setMenuOpen(false);
  });
  categoryMenu.append(option);
});

const storedSetup = JSON.parse(window.sessionStorage.getItem("quizBattleSetup") || "{}");
const initialCategory = configCategories.includes(storedSetup.category) ? storedSetup.category : configCategories[0];

setSelectedCategory(initialCategory);

categoryTrigger.addEventListener("click", () => {
  setMenuOpen(!categoryShell.classList.contains("is-open"));
});

document.addEventListener("click", (event) => {
  if (!categoryShell.contains(event.target)) {
    setMenuOpen(false);
  }
});

categoryTrigger.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setMenuOpen(true);
    categoryMenu.querySelector(".custom-select-option")?.focus();
  }
});

categoryMenu.addEventListener("keydown", (event) => {
  const options = Array.from(categoryMenu.querySelectorAll(".custom-select-option"));
  const currentIndex = options.indexOf(document.activeElement);

  if (event.key === "Escape") {
    setMenuOpen(false);
    categoryTrigger.focus();
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    options[(currentIndex + 1) % options.length]?.focus();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    options[(currentIndex - 1 + options.length) % options.length]?.focus();
  }
});

adminForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const existingSetup = JSON.parse(window.sessionStorage.getItem("quizBattleSetup") || "{}");
  const nextSetup = {
    ...existingSetup,
    category: categorySelect.value
  };

  window.sessionStorage.setItem("quizBattleSetup", JSON.stringify(nextSetup));
  window.location.href = "pages/app.html";
});