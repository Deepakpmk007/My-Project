const btn = document.querySelectorAll(".btn--tap");
const btns = document.querySelector(".taps--btn");
const taps = document.querySelectorAll(".tap--content");
btns.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn--tap");
  console.log(clicked.dataset.tab);
  if (!clicked) return;
  taps.forEach((t) => t.classList.remove("tap--active"));
  btn.forEach((c) => c.classList.remove("btn--active"));

  clicked.classList.add("btn--active");

  document
    .querySelector(`.tap--operation--${clicked.dataset.tab}`)
    .classList.add("tap--active");
});

const scroll_btn = document.querySelector(".scroll-btn");
const my_skill = document.querySelector("#my-skill");
scroll_btn.addEventListener("click", function (e) {
  // const s1coords = my_skill.getBoundingClientRect();

  my_skill.scrollIntoView({ behavior: "smooth" });
});

const my__pro = document.querySelector(".my--project");
const my__life = document.querySelector("#my--life");

my__pro.addEventListener("click", function (e) {
  // const s1coords = my_skill.getBoundingClientRect();

  my__life.scrollIntoView({ behavior: "smooth" });
});
