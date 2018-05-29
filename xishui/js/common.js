window.onload=function(){
	(function(){
		var wid=document.documentElement.clientWidth;
	    document.documentElement.style.fontStyle=wid/1920+'px';
	})();
	(function(){
		var swiper = new Swiper('.swiper-container', {
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
	})();
	(function(){
		var news=document.getElementById("newss");
		var newscon=document.getElementById("newscon");
		var newsapper=document.getElementById("newsapper");
		var up=document.getElementById("up");
		var down=document.getElementById("down");
		newsapper.innerHTML=newscon.innerHTML;
		var f=function(){
		    news.scrollTop++;
		    if(news.scrollTop>=newscon.offsetHeight){
		        news.scrollTop=0;
		    }
		}
		var i=setInterval(f,200);
		news.onmouseover=function(){
		    clearInterval(i);
		}
		news.onmouseout=function(){
		    i=setInterval(f,200);
		}
		up.onmouseover=function(){
		    clearInterval(i);
		}
		up.onmouseout=function(){
		    i=setInterval(f,200);
		}
		up.onclick=function(){
			if(newscon.offsetHeight>=news.scrollTop){
		        news.scrollTop=news.scrollTop-30;
		    }
		}
		down.onmouseover=function(){
		    clearInterval(i);
		}
		down.onmouseout=function(){
		    i=setInterval(f,200);
		}
		down.onclick=function(){
			news.scrollTop= news.scrollTop+30;
		}
	})();
	
}
