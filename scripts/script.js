const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector("nav");

// Toggle the menu visibility
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

// Optional: Close the menu if clicked outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    navMenu.classList.remove("showMenu");
  }
});
