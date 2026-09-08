const root = document.documentElement;
const cursor = document.querySelector(".cursor");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function aim(x, y) {
  root.style.setProperty("--mx", `${x}px`);
  root.style.setProperty("--my", `${y}px`);
  document.body.classList.add("is-lit");
  if (cursor) {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

function darken() {
  document.body.classList.remove("is-lit");
}

if (!reduce) {
  window.addEventListener(
    "pointermove",
    (event) => aim(event.clientX, event.clientY),
    { passive: true },
  );
  window.addEventListener(
    "pointerdown",
    (event) => aim(event.clientX, event.clientY),
    { passive: true },
  );
  document.addEventListener("pointerleave", darken);
}

document.querySelector(".skip")?.addEventListener("click", (event) => {
  const target = document.querySelector("#licht");
  if (!target) return;
  event.preventDefault();
  target.focus?.();
  document.body.classList.add("is-lit");
  root.style.setProperty("--mx", "50vw");
  root.style.setProperty("--my", "50vh");
});
