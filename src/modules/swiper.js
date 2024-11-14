new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,


  navigation: {
    nextEl: '.halls__list-right',
    prevEl: '.halls__list-left',
  },

  mousewheel: true,
  keyboard: true,

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
