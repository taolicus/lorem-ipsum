console.log("Oli!");

// Hamburger menu logic for mobile nav
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const mobileNav = document.getElementById("mobile-nav");
const navOverlay = document.getElementById("nav-overlay");

function openMobileNav() {
  mobileNav.classList.remove("-translate-x-full");
  navOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav.classList.add("-translate-x-full");
  navOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

if (navToggle && mobileNav && navOverlay) {
  navToggle.addEventListener("click", openMobileNav);
  navOverlay.addEventListener("click", closeMobileNav);
}
if (navClose) {
  navClose.addEventListener("click", closeMobileNav);
}
// Optional: close nav when a link is clicked (for better UX)
mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});
