const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

function handleSubmit(event) {
  event.preventDefault();

  // GitHub Pages is static — this just shows a message.
  // Later you can connect Formspree / Netlify Forms.
  const note = document.getElementById("formNote");
  note.textContent = "Thanks! For now this form is demo-only. Please email me directly.";
  return false;
}
