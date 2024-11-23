// JavaScript for toggling the navigation menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// JavaScript for collapsible sections
const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling; // The <ul> below <h2>
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
