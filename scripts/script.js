document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hamburgerBtn = document.querySelector("button[aria-label='Open Menu']");
  const navMenu = document.querySelector("nav");

  // Ensure elements exist
  if (hamburgerBtn && navMenu) {
    // Toggle the menu visibility
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("showMenu");
    });

    // Close the menu if clicked outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove("showMenu");
      }
    });
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-direction]");
  if (!button) return;

  const direction = button.getAttribute("data-direction");
  // <ul> is the parent of the buttons
  const carousel = button.parentElement;

  // Width to scroll
  const scrollAmount = carousel.clientWidth;
  if (direction === "left") {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else if (direction === "right") {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});
