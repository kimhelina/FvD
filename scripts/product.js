const carousel = document.querySelector('[aria-label="Product Card Carousel"]');
const track = carousel.querySelector('section[aria-live="polite"]');
const slides = Array.from(track.querySelectorAll('figure'));
const nextButton = carousel.querySelector('button[aria-label="Next slide"]');
const prevButton = carousel.querySelector('button[aria-label="Previous slide"]');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  // Update aria-live region for accessibility
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.setAttribute('aria-hidden', 'false');
    } else {
      slide.setAttribute('aria-hidden', 'true');
    }
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Initialize
updateCarousel(); 