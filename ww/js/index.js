(function(){
	fontSize();
	window.onresize=function(){
		fontSize();
	}
	//改变默认字体大小
	function fontSize(){
		var wid = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = wid/ 7.2 + 'px';
	}
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
 //关于李沉选项卡切换
(function(){
    $( document ).on( "click", ".aboutli .change", function() {
	  $(".aboutli .change").removeClass("active");
	  $(this).addClass("active");
	  $(".aboutli .contents").removeClass("active");
	  $(".aboutli .contents").eq($(this).index()).addClass("active");
	});
})();
//首页轮播
  (function(){
  	var mySwiper = new Swiper ('.swiper-container5', {
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
   });   
})();
//二级菜单
(function(){
//	$(".speck .tittle .firstbar").removeClass("swiper-slide-active");
   $(".morenav .arrow").click(function(){
// 	$(this).parents('.swiper-wrapper').children(".morenav").children('ul').removeClass('active');
	if ($(this).siblings("ul").css('display')=="none") {
		$(this).parents('.swiper-wrapper').children(".morenav").children('ul').removeClass('active');
        $(this).siblings("ul").addClass('active');
		$(this).parents('.swiper-container').css('height',parseInt($(this).siblings("ul").css('height'))+parseInt($(this).siblings("a").css('height'))+'px');
		
	} else{
		$(this).siblings("ul").removeClass('active');
		$(this).parents('.swiper-container').css('height','.5rem');
	}
 })
var mySwiper = new Swiper('.swiper-container', {
  loop : false,
  slidesPerView : 'auto',
  loopedSlides :10,
});
 var mySwiper = new Swiper('.swiper-container3',{
	direction : 'vertical',
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },
	  slidesPerView: 'auto',
      mousewheelControl: true,
     
      freeMode: true,
      scrollbarHide : false,
      scrollbarDraggable : true ,
      scrollbarSnapOnRelease : true ,
 });
 

})();
