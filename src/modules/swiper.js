import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: '.halls__list-right',
    prevEl: '.halls__list-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

  },
});
