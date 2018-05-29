window.onload=function(){
  var mySwiper = new Swiper ('.swiper-container', {
	  spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }         
   });  
   var swiper = new Swiper('.swiper-container3', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}      