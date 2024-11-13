document.querySelectorAll('.gallery-container').forEach(gallery => {
  let currentIndex = 0;
  const images = gallery.querySelectorAll('.gallery-image');
  const totalImages = images.length;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; // Loops back to the first image
    images[currentIndex].classList.add('active');
  }

  // Start the image rotation for each gallery individually every 3 seconds
  setInterval(showNextImage, 1000);
});