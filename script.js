// import Swiper JS
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// import Swiper styles


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2.25,
  spaceBetween: '2.5%',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let nextButton = document.querySelector(".next");
// console.log(nextButton);
let prevButton = document.querySelector(".prev");

nextButton.addEventListener('click', function () {
  swiper.slideNext();
});

prevButton.addEventListener('click', function () {
  swiper.slidePrev();
});

