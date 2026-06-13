window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const carouselLength = document.querySelectorAll(".slide").length;

  let currentSlide = 0;

  document.querySelector(".next").addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= carouselLength) {
      currentSlide = 0;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  document.querySelector(".prev").addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = carouselLength - 1;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
});
