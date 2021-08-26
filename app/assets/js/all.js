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





//  聽聽他們怎麼說 swiper
 const responseSwiper = document.querySelector('.customer-responses-swiper');
 if (responseSwiper) {
  const swiper = new Swiper(".customer-responses-swiper", {
    slidesPerView: 1,
    grid: {
      rows: 3,
       fill: 'row',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
         fill: 'row',
       },
    
      },
     992: {
     slidesPerView: 3,
      grid: {
       rows: 2,
         fill: 'row',
       },
     
     },
     }
  });
 }
