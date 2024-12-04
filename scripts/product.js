const carousel = document.querySelector('[aria-label="Product Card Carousel"]');
const track = carousel.querySelector('section[aria-live="polite"]');
const slides = Array.from(track.querySelectorAll("figure"));
const nextButton = carousel.querySelector('button[aria-label="Next slide"]');
const prevButton = carousel.querySelector(
  'button[aria-label="Previous slide"]'
);
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  // Update aria-live region for accessibility
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.setAttribute("aria-hidden", "false");
    } else {
      slide.setAttribute("aria-hidden", "true");
    }
  });
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Initialize
updateCarousel();

// --------PRODUCT IMG CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(
    "main section:nth-of-type(3) > div"
  );
  const images = carouselContainer.querySelectorAll("img");
  const prevButton = document.querySelector(
    'button[aria-label="previous image button"]'
  );
  const nextButton = document.querySelector(
    'button[aria-label="next image button"]'
  );

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1; // Loop back to the last image
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1; // Loop back to the first image
    updateCarousel();
  });
});

//----------- DIALOG
const engraveButton = document.querySelector("main > button:nth-of-type(2)");
const engraveDialog = document.querySelector("dialog");
engraveButton.addEventListener("click", () => {
  engraveDialog.showModal();
});
