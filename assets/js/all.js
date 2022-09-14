"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiperz = new Swiper(".mySwiper", {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  // loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    992: {
      slidesPerView: 9
    }
  }
});
var swiper = new Swiper('.swiperx', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiperz = new Swiper(".mySwiper2", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  spaceBetween: 30,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    992: {
      slidesPerView: 9
    }
  }
});
//# sourceMappingURL=all.js.map
