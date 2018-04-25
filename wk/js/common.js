$(document).ready(function(){
	var arr=[];
	var arr3=[];
	var arr5=[];
	//动态监听表单的值
	$(" input[ type='submit' ] ").click(function(){
		$(" input[ type!='submit' ] ").each(function (key,value) {
		   arr[key]=$(this).val();
	   })
		$('label').each(function (key,value) {
		   arr3[key]=$(this).text();
	   })
		for (var i=0;i<arr.length;i++) {
			if (arr[i]=='') {
	            layer.msg('同上', {
					  icon: 0,
					  content:arr3[i]+'为空',
					   skin: 'layclass',
					  area: ['200px', '120px'],
					  time: 2000 //2秒关闭（如果不配置，默认是3秒）
					}, function(){
					 
				});  
				 return false;
			}
		}
		//表单值不为相应内容提示输入有误
		
		var regBox = {
	        regEmail : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,//邮箱
	        regName :   /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/,//用户名
	        regMobile : /^1[3|4|5|7|8][0-9]{9}$/,//手机
	        regIDCard1 : /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/,
	        regZhima : /^(0|[1-9]\d\d|1000)$/
        }
        
        var name=$('#name').val();
        var idNum=$('#idNum').val();
	    var mobile = $('#phoneNumber').val();
	    var zhima = $('#zhima').val();
	    
	    var nflag = regBox.regName.test(name);
	    var IDflag = regBox.regIDCard1.test(idNum);
	    var mflag = regBox.regMobile.test(mobile);
	    var zflag = regBox.regZhima.test(zhima);
	    
	    if (!nflag) {
	        layer.msg('同上', {
				  icon: 0,
//				  content:'arr3[i]+'为空'',
				  content:'姓名输入有误',
				  skin: 'layclass',
				  area: ['200px', '140px'],
				  time: 2000 //2秒关闭（如果不配置，默认是3秒）
				}, function(){	 
			}); 
	        return false;
	    }
	    
	     if (!IDflag) {
	        layer.msg('同上', {
				  icon: 0,
				  content:'身份证号码输入有误',
				  skin: 'layclass',
				  area: ['200px', '140px'],
				  time: 2000 //2秒关闭（如果不配置，默认是3秒）
				}, function(){	 
			}); 
	        return false;
	    }
	    
	    if (!mflag) {
	        layer.msg('同上', {
				  icon: 0,
				  content:'电话号码输入有误',
				  skin: 'layclass',
				  area: ['200px', '140px'],
				  time: 2000 //2秒关闭（如果不配置，默认是3秒）
				}, function(){	 
			}); 
	        return false;
	    }
	    
	    if (!zflag) {
	        layer.msg('同上', {
				  icon: 0,
//				  content:'arr3[i]+'为空'',
				  content:'请输入有效的芝麻信用分数',
				  skin: 'layclass',
				  area: ['200px', '140px'],
				  time: 2000 //2秒关闭（如果不配置，默认是3秒）
				}, function(){	 
			}); 
	        return false;
	    }
			
			
	})
	
//	审核提交时检查输入框是否为空
//	$(" input[ type!='submit' ] ").each(function (key,value) {
//		   arr[key]=$(this).val();
//	})
//	for (var i=0;i<arr.length;i++) {
//			if (arr[i]==!'') {
//	            $(".inpSub").removeAttr('disabled');
//			}
//	}
    
       $("input").bind("change propertychange",function(){
            $(".inpSub").removeAttr('disabled');
//          8dcef6  12a4f6
//          $(".check .inpSub").css("background-color","#12a4f6 !important");
       })
       
       
    function changeSize(){
       var w = document.documentElement.clientWidth;
       document.documentElement.style.fontSize =w / 7.5 + 'px';
    }
    changeSize();
     
       
})
