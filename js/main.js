$(function () {
  'use strict';
  // move to top postilion after reload page
  $('html , body').animate({ scrollTop: 0 }, 100);
  // ------------------------------------------------------------------------->
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
  // ------------------------------------------------------------------------->
  // close menu mobile after click item
  $('nav#slide-menu > .links li a').on('click', function () {
    $('body').removeClass('menu-active');
  });
  // -------------------------------------------------------------------------
  let scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollButton.show();
      $('.navbar-desktop').css({
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderEndStartRadius: '2rem',
        borderEndEndRadius: '2rem',
        borderBottom: '1px solid #fff',
      });
    } else {
      scrollButton.hide();
      $('.navbar-desktop').css({
        boxShadow: 'unset',
        borderRadius: '0',
        borderBottom: 'unset',
      });
    }
  });
  // ------------------------------------------------------------------------->
  // click button to scroll top
  scrollButton.on('click', function () {
    $('html ,body').animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
  // -------------------------------------------------------------------------->
  // list items navbar click item to move section
  $('.navbar-desktop .links li a').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top - 45,
      },
      100
    );
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  // -------------------------------------------------------------------------->
  // Show Loading
  $('.loading-overlay .spinner').fadeOut(400, function () {
    $('body').css('overflow', 'hidden');
    $(this)
      .parent()
      .fadeOut(400, function () {
        $(this).remove();
      });
  });
  // ------------------------------------------------------------------------->
  // trigger aos animate
  AOS.init();
  // ------------------------------------------------------------------------->
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
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  // ------------------------------------------------------------------------->
  // trigger swiper scroll sing up
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
