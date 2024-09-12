// Image slider functionality
const sliderImages = document.querySelectorAll('.slider-image');
let currentImageIndex = 0
function showNextImage() {
    sliderImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImages[currentImageIndex].classList.add('active');

setInterval(showNextImage, 5000); // Change image every 5 seconds
}