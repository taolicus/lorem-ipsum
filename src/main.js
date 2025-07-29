console.log("Lorem Ipsum");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Nav
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector("#hero nav");

  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Reveal
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Copyleft
  const copyleftYear = document.getElementById("current-year");
  if (!copyleftYear) console.log("no copyleft year container found");
  copyleftYear.textContent = new Date().getFullYear();
});
