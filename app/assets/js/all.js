$(function() {
  console.log('Hello Bootstrap5');
});

const swiper = new Swiper('.multi-lessons-swiper', {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});