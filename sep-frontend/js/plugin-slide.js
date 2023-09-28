(function ($) {
   var  swiper = new Swiper(".slideHero", {
      effect: "fade",
      loop: true,
      autoplay: {
         delay: 7000,
      },
      pagination: {
         el: ".swiper-pagination",
         dynamicBullets: false,
         clickable: true,
      },
   });

   var swiper = new Swiper('.slide-product', {   
      slidesPerView: 2,
      speed:500,
      loop:false,
      spaceBetween: 7,
       // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         575.98: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         1199.98: {
            slidesPerView: 3,
            spaceBetween: 5
         },
      },
   });

   var swiper = new Swiper('.slide-collection', {   
      slidesPerView: 2,
      speed:500,
      loop:false,
      spaceBetween: 7,
       // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         575.98: {
            slidesPerView: 3,
            spaceBetween: 15
         },
         767.98: {
            slidesPerView: 4,
            spaceBetween: 15
         }
      },
   });

   
})(jQuery);
