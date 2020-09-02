document,
  addEventListener(
    "DOMContentLoaded",
    () => {
      const btn = document.querySelector(".nav-btn");
      const nav = document.querySelector(".header-nav");
      btn.addEventListener("click", () => {
        nav.classList.toggle("header-nav-open");
        btn.classList.toggle("nav-btn__open");
      });
    },
    false
  );
