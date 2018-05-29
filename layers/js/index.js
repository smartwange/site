window.onload=function(){
	//自适应字体设置
	(function(){
		var wid=document.documentElement.clientWidth;
	    document.documentElement.style.fontStyle=wid/1920+'px';
	})();
	//首页选项卡切换
  (function(){
  	$( document ).on( "click", ".news_top li", function() {
		 $(".news_top li").removeClass("active");
		 $(this).addClass("active");
		 $(".news_bottom .content").removeClass("active");
	     $(".news_bottom .content").eq($(this).index()).addClass("active");
	});
  })();
 
	//首页轮播
  (function(){
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
  })();
  
}      