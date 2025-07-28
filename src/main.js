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
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".links");

  burger.addEventListener("click", () => {
    links.classList.toggle("open");
    burger.classList.toggle("open");
  });

  // Reveal
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Copyleft
  const copyleftYear = document.getElementById("current-year");
  if (!copyleftYear) console.log("no copyleft year container found");
  copyleftYear.textContent = new Date().getFullYear();
});
