const carousel = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
let index = 0;

function updateCarousel() {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});
nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

// opcional: auto-play
// setInterval(() => { nextBtn.click(); }, 5000);
