"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  console.log('Hello Bootstrap5');
}); //課程多元 swiper

var courseSwiper = new Swiper(".course-swiper", {
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
}); //  聽聽他們怎麼說 swiper

var responseSwiper = document.querySelector('.customer-responses-swiper');

if (responseSwiper) {
  var swiper = new Swiper(".customer-responses-swiper", {
    slidesPerView: 1,
    grid: {
      rows: 3,
      fill: 'row'
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row'
        }
      }
    }
  });
} //teacher-intro-swiper


var teachintroSwiper = document.querySelector('.teacher-intro-swiper');

if (teachintroSwiper) {
  var _Swiper;

  var _swiper = new Swiper(".teacher-intro-swiper", (_Swiper = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  }, _defineProperty(_Swiper, "spaceBetween", 30), _defineProperty(_Swiper, "breakpoints", {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }), _Swiper));
} //  date-picker


var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {// ...options
  // todayHighlight:true,
});
//# sourceMappingURL=all.js.map
