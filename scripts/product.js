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