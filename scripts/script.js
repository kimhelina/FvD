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
