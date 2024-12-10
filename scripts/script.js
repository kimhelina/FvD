//------------ HEADER HIDE & SHOW SCROLLING------------//
let lastScrollPosition = 0;

function handleScroll() {
  const currentScrollPosition = window.scrollY;
  const header = document.querySelector('header');
  
  // Determine scroll direction
  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollPosition = currentScrollPosition;
}

// Add scroll event listener with throttling for better performance
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// ---------- HAMBURGER ----------------//
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

// ---------- SEARCH ----------------//
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector("button[aria-label='Search']");
  const closeButton = document.querySelector(
    "section[aria-hidden] button[aria-label='Close Search']"
  );
  const searchPopUp = document.querySelector("section[aria-hidden]");
  const navButtons = searchPopUp.querySelectorAll(
    "section[role='navigation'] > button:not(:nth-of-type(2))"
  );
  const activeButton = searchPopUp.querySelector(
    "section[role='navigation'] > button:nth-of-type(2)"
  );

  //얘네 html 에 쓸 수 있는지 지피티한테 물어보기
  const options = [
    "COMPLIMENTARY FESTIVE DUO",
    "12 DAY ADVENT CALENDAR",
    "GINGER BISCUIT",
    "ORANGE BITTERS",
    "FIR & ARTEMISIA",
    "HINOKI & CEDARWOOD",
    "CHRISTMAS GIFTS",
    "HOME & CANDLES",
    "COLOGNES",
    "GIFTS FOR HER",
    "GIFTS FOR HIM",
  ];
  let currentIndex = 0;

  if (searchButton && closeButton && searchPopUp) {
    // Open the Search Pop-Up
    searchButton.addEventListener("click", () => {
      searchPopUp.setAttribute("aria-hidden", "false");
    });

    // Close the Search Pop-Up
    closeButton.addEventListener("click", () => {
      searchPopUp.setAttribute("aria-hidden", "true");
    });

    // Navigate Left or Right
    navButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        currentIndex =
          (currentIndex + (index === 0 ? -1 : 1) + options.length) %
          options.length;
        activeButton.textContent = options[currentIndex];
      });
    });
  }
});

const previousBtn = document.querySelector("details ul button");

const footerDetails = document.querySelectorAll("footer details");

window.onresize = function (event) {
  if (window.innerWidth > 800) {
    footerDetails.forEach((footerDetail) => {
      footerDetail.setAttribute("open", true);
    });
  } else {
    footerDetails.forEach((footerDetail) => {
      footerDetail.removeAttribute("open");
    });
  }
};


// Video sound toggle functionality
const video = document.querySelector('video');
const soundToggle = document.querySelector('section:has(video) button');
const soundIcon = soundToggle.querySelector('img');

soundToggle.addEventListener('click', () => {
  video.muted = !video.muted;
  soundIcon.src = video.muted ? 
    'images/icons/volume-mute.png' : 
    'images/icons/volume-up.png';
  soundIcon.alt = video.muted ? 
    'Volume mute icon' : 
    'Volume up icon';
});

const playPauseBtn = document.querySelector('section:has(video) button:first-of-type');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.querySelector('img').src = 'images/icons/pause.png';
    playPauseBtn.querySelector('img').alt = 'Pause icon';
  } else {
    video.pause();
    playPauseBtn.querySelector('img').src = 'images/icons/play.png';
    playPauseBtn.querySelector('img').alt = 'Play icon';
  }
});