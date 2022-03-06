$(function () {
  'use strict';
  // Slide menu
  (function () {
    var $body = document.body,
      $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

    if (typeof $menu_trigger !== 'undefined') {
      $menu_trigger.addEventListener('click', function () {
        $body.className = $body.className == 'menu-active' ? '' : 'menu-active';
      });
    }
  }.call(this));
  // close menu mobile after click item
  $('nav#slide-menu > .links li a').on('click', function () {
    $('body').removeClass('menu-active');
  });
  // trigger swiper scroll
  new Swiper('.mySwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // trigger swiper scroll singigup
  new Swiper('.signup-swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
