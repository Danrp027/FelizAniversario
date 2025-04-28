const button = document.getElementById('showMessage');
const slideshow = document.querySelector('.slideshow');
const music = document.getElementById('background-music');

button.addEventListener('click', () => {
  slideshow.classList.toggle('hidden');

  if (music.paused) {
    music.play();
    music.loop = true;
  }
});


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);
