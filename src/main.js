console.log("Oli!");

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("max-h-0")) {
      mobileMenu.classList.remove("max-h-0");
      mobileMenu.classList.add("max-h-60"); // adjust as needed
    } else {
      mobileMenu.classList.remove("max-h-60");
      mobileMenu.classList.add("max-h-0");
    }
  });

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
