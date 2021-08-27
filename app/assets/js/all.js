$(function() {
  console.log('Hello Bootstrap5');
});

//課程多元 swiper
const courseSwiper = new Swiper(".course-swiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  grid: {
      rows: 2,
      fill: 'row'
    },
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      grid: {
        rows: 1,
        fill: 'row'
      },
      slidesPerView: 1.5,
      slidesPerColumn: 1
    }
  }
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
