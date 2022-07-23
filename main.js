// Allow animations after delay
setTimeout(() => {
  document.body.classList.remove("preload");
}, 300);

// Swiper config
const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  initialSlide: 2,
  spaceBetween: 15,
  breakpoints: {
    768: {
      spaceBetween: 30
    }
  }
});

const prevSlideBtn = document.querySelector(".button--control.prev");
const nextSlideBtn = document.querySelector(".button--control.next");

prevSlideBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
nextSlideBtn.addEventListener("click", () => {
  swiper.slideNext();
});
