// --------PRODUCT IMG CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(
    "main > section:nth-of-type(3) > section:nth-of-type(1)"
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
    
    // Add accessibility attributes
    images.forEach((image, index) => {
      image.setAttribute('aria-hidden', index === currentIndex ? 'false' : 'true');
    });
  }

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  // Initialize carousel
  updateCarousel();
});

//----------- DIALOG
document.addEventListener("DOMContentLoaded", function() {
  const engraveButton = document.querySelector("main > button:nth-of-type(2)");
  const engraveDialog = document.querySelector("dialog");
  const closeDialogButton = engraveDialog.querySelector("button:nth-of-type(1)");

  engraveButton.addEventListener("click", () => {
    engraveDialog.showModal();
  });

  closeDialogButton.addEventListener("click", () => {
    engraveDialog.close();
  });
});

// Get dialog element
const dialog = document.querySelector('dialog');

// Close dialog when clicking outside
dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

// Add keyboard support for closing dialog esc key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog.open) {
        dialog.close();
    }
});

// -------- WISHLIST BUTTON --------
const wishlistButton = document.querySelector('button[data-wishlist]');

wishlistButton.addEventListener('click', () => {
  const img = wishlistButton.querySelector('img');
  const isInWishlist = wishlistButton.dataset.wishlist === 'true';
  console.log("in wishlist: ");

  // Toggle the wishlist state
  wishlistButton.dataset.wishlist = !isInWishlist;
  
  // Change the icon source
  img.src = isInWishlist 
    ? 'images/icons/bookmark.png'
    : 'images/icons/bookmark-fill.png';
});

// TASTING NOTES CAROUSEL
const scrollDuration = 50; // Reduced duration for faster response
const ul = document.querySelector("details ul");
const cards = ul.querySelectorAll("li");
const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width
const gap = parseInt(getComputedStyle(ul).gap); // Gap between cards from CSS
const totalCards = cards.length;

document.querySelectorAll("button[data-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction;
    const scrollLeft = ul.scrollLeft;
    const visibleWidth = ul.offsetWidth;

    // Calculate next target based on direction
    let targetScroll;
    if (direction === "right") {
      const maxScroll = ul.scrollWidth - visibleWidth;

      // Wrap-around logic for next
      if (scrollLeft + visibleWidth >= ul.scrollWidth - 1) {
        targetScroll = 0; // Jump to the first card
      } else {
        targetScroll = scrollLeft + cardWidth + gap;
      }
    } else if (direction === "left") {
      // Wrap-around logic for previous
      if (scrollLeft <= 0) {
        targetScroll = ul.scrollWidth - visibleWidth; // Jump to the last card
      } else {
        targetScroll = scrollLeft - (cardWidth + gap);
      }
    }

    animateScroll(ul, targetScroll);
  });
});

// Animation function
function animateScroll(container, targetScroll) {
  const startScroll = container.scrollLeft;
  const distance = targetScroll - startScroll;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / scrollDuration, 1);

    // Immediate fast start with ease-out
    const easeOut = percentage < 0.3
      ? percentage * 3 // Start fast in the first 30% of the duration
      : 1 - Math.pow(1 - percentage, 3); // Ease out for the rest

    container.scrollLeft = startScroll + distance * easeOut;

    if (progress < scrollDuration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
