import "../styles/main.css";

const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const mobileChrome = document.querySelector("[data-mobile-chrome]");

function setMenuOpen(open) {
  if (!navToggle || !navPanel) return;
  navPanel.classList.toggle("is-open", open);
  navPanel.hidden = !open;
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("overflow-hidden", open);
  mobileChrome?.classList.toggle("is-menu-open", open);

  if (open) {
    const firstLink = navPanel.querySelector("a");
    firstLink?.focus();
  } else {
    navToggle.focus();
  }
}

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    setMenuOpen(!navPanel.classList.contains("is-open"));
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navPanel.classList.contains("is-open")) {
      setMenuOpen(false);
    }
  });
}

/* Home: white mobile chrome only while the dark hero is under the top bar */
if (mobileChrome?.classList.contains("is-over-hero")) {
  const hero = document.querySelector(".hero");
  if (hero && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      ([entry]) => {
        mobileChrome.classList.toggle("is-over-hero", entry.isIntersecting);
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
  }
}

const reveals = document.querySelectorAll(".reveal");
if (reveals.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
