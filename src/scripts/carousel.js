const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".carousel__slides");
const prevBtn = carousel.querySelector(".carousel__prev");
const nextBtn = carousel.querySelector(".carousel__next");
const indicators = carousel.querySelectorAll(".carousel__indicator");

let currentSlide = 0;
const slideWidth = slides.firstElementChild.offsetWidth;
const totalSlides = slides.children.length;

function updateSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[currentSlide].classList.add("active");
}

prevBtn.addEventListener("click", () => updateSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => updateSlide(currentSlide + 1));

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => updateSlide(index));
});
