$(function () {
	//搜索
//	$(".tickSearch").click(function () {
//		$('.searchIn').css('display','inline-block');
//	})
   $(".tickSearch").click(function(event){
	   	event.stopPropagation();//阻止mousedown 事件冒泡（注意只阻止了mousedown事件）
	    event.preventDefault();//阻止当前元素默认事件
	    if($(".searchIn").css("display")=="none"){  
	        $(".searchIn").show();  
	    }else{  
	        $(".searchIn").hide();  
	    }  
   })
   $(document).click(function(e) {
    var target = $(e.target);
    // 如果#overlay或者#btn下面还有子元素，可使用
    // !target.is('#btn *') && !target.is('#overlay *')
    if(!target.is('.searchIn')) {
       if ( $('.searchIn').is(':visible') )
        {
        	 $('.searchIn').hide();
        }
    }
   })
	//中英文選擇
     $(".enOrch").mouseenter(function(){  
                $(this).siblings('.box').slideDown("slow"); //慢慢展开  
            })
     $(".box").mouseleave(function(){  
                $(this).slideUp("slow");//慢慢收起  
      })
     //
     //中英文選擇
     $(".navbar-nav li").mouseenter(function(){  
                $(this).children('hr').show()  
     }).mouseleave(function(){  
                $(this).children('hr').hide();
     })
     
     //轮播时间设置
     $('.carousel').carousel({
        interval: 4000
    })
     //微信显示或者隐藏
     $(".footer .link .weixin").mouseenter(function(){  
                $(this).children('img').show()  
     }).mouseleave(function(){  
                $(this).children('img').hide();
     })
     $(".footerXs .link .weixin").mouseenter(function(){  
                $(this).children('img').show()  
     }).mouseleave(function(){  
                $(this).children('img').hide();
     })
})