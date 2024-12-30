const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Auto-play
setInterval(nextSlide, 3000);

// Initialize
showSlide(currentIndex);
