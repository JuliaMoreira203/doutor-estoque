const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          centeredSlides: true
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 30
        }
      }
  });