$(function() {
	//右侧宽度计算
	var winFun = function () {
		var winbW = $(window).outerWidth(true),winW = 1300,leftW = $("#left").outerWidth(true),adW1 = $(".RAD01_01").outerWidth(true),adW2 = $(".RAD01_02").outerWidth(true),adW3 = $(".RAD01_03").outerWidth(true),rigW2 = $("#rig2").outerWidth(true),ht3W = $(".ht3").outerWidth(true),nblk1W = $(".nblk1").outerWidth(true),otW = $(".ROT11_60").outerWidth(true),cunLB = $(".cun_left_box2").outerWidth(true),proW = $(".p_w").outerWidth(true),nwarpW = $(".n_warp").outerWidth(true),csimgW = $(".cs_img").outerWidth(true),cunbH = $(".cun_box1").outerHeight(true),cunrbH = $(".cun_right_box2").outerHeight(true),cunotH = $(".ROT11_50").outerHeight(true),cuDtlH = $(".RST85_01").outerHeight(true);
		var W = winW - leftW,pw = 50,W2 = W - rigW2,W3 = (W2-20-ht3W)/2,W4 = W2-86, W5 = W4/3-45,W6 = (W2-otW)/3,W7 = (W-cunLB)/2,W8 =W2/2-10,W9 = (W-240)/3;
		//var sW = 1300,sW2 = 1300,sW3 = 1300;
 			$(".winbox").addClass("winbox2");
			
			if(winbW<1300){
				$("#left").css("left",0);
				$(".winbox2 .ROT11_01 .OT11").css("right",8)
			}else{
			var fW = $(window).outerWidth(true);
			var l = (fW-winW)/2
			$("#left").css("left",l);
			$(".winbox2 .ROT11_01 .OT11").css("right",l+8)
			}
			
			
			$(".idx_winbg").height($("body").outerHeight(true));
			
			$("#right").width(W);
			$("#banner").width(W);
			$("#banner img").width(W);
			$("#n_banner img").width(W);
			$(".job_img img").width(winbW);
			$(".block_warp").width(W2);
			$(".tq_block2").width(W2-92);
			$(".scrollcontainer2 ul").width(W2);
			var sinfoH = $(".scrollcontainer2 .ht1 .cell1 .info").outerHeight(true);
			$(".scrollcontainer2 .ht1 .cell1 img").height(sinfoH);
			var sinfoH2 = $(".scrollcontainer2 .ht1 .cell2 .info").outerHeight(true);
			$(".scrollcontainer2 .ht1 .cell2 img").height(sinfoH2);
			var sinfoH3 = $(".scrollcontainer2 .ht2 .cell3 .info").outerHeight(true);
			$(".scrollcontainer2 .ht2 .cell3 img").height(sinfoH3);
			var sinfoH4 = $(".scrollcontainer2 .ht2 .cell4 .info").outerHeight(true);
			$(".scrollcontainer2 .ht2 .cell4 img").height(sinfoH4);
			$(".scrollcontainer2 .ht3 .cell5 img").height(sinfoH4);
			$(".img_warp .img").width(W);
			$(".RAD01_05 .core img").width(W2/4-30);
			$(".v_content li").width(nblk1W-55);
			$(".RAD01_21 .core img").width(winbW);
			$(".job_img img").width(winbW);
			$(".br_cont img").width(winW);
			var bH = $("#banner img").outerHeight(true);
			$("#banner").height(bH);
			$(".cun_box1").width(W2);
			$(".cun_right_box2 .core").width(W7-50);
			$(".cun_right_box2 .core img").width(W7-50);
			$(".cun_right_box2 .core .c_txt").width(W7-50);
			$(".RST75_01 li").width(W8);
			$(".RST75_01 li .core img").width(W8);
			$(".cui_list li img").width(W2/3-20);
			$(".cui_list li .s_txt").width(W2/3-40);
			$(".br_contimg .img").width(winbW);
			$(".sd_scroll img").width(W9);
			$(".sd_scroll li").width(W9);
			$(".sd_scroll2 li").width(W-370);
			$(".container").width('');
			$(".bn_container").width('');
			$(".news_blk li.nblk2").width('');
			$(".news_blk li.nblk3").width('');
			if(winW<1320){
				//$(".news_blk li.nblk2").width('25%');
				//$(".news_blk li.nblk3").width('28%');
			}
			$(".cs_img img").width(csimgW);
			var csimgH = $(".cs_img img").outerHeight(true);
			//$(".RST72_01 .st_cont").height(csimgH - 215);
			$(".pro_container").width('');
			$(".ny_container").width('');
			$(".block_m").height(cuDtlH);
			var cunrbH = $(".cun_right_box2").outerHeight(true);
			$(".block_warp_cun").height('');
			$(".cun_left_box2").height(cunrbH);
			$(".RST72_02 .st_cont").height('');
			$(".RST85_01").width(W2);
			$(".b_links .RMN02_01").eq(3).hide();
			
			$(".cu_dtl_list .cd_img").width((W2-100)/2);
			$(".cu_dtl_list .cd_img img").width((W2-100)/2);
			$(".cu_dtl_list .cd_info").width((W2-100)/2);
			var cdimgH = $(".cu_dtl_list .cd_img img").outerHeight(true);
			$(".cu_dtl_list .cd_info").height(cdimgH);
			
			
			var $mscH = $(".block_warp .ms_scroll2 .ms_sl_cont").outerWidth(true);
			$(".block_warp .ms_scroll2").width($mscH+60);
			
			var cusnTH = $(".ROT11_60").outerWidth(true);
			$(".scrollcontainer5 .cell").width((W2-cusnTH-120)/3);
			
			
			try{
			//首页健康养护切换效果
			$(".health .scrollcontainer2").jCarouselLite({
				btnNext: ".health .aright",
				btnPrev: ".health .aleft",
				visible:1,
				circular:false,
				speed: 2000
			});
			}catch(e){};
			
			
			
	
			
			var doc_W = $(".doc_scroll").outerWidth(true);
			$(".doc_ww").width(doc_W+90);
			
		
		
			
	};
	$(window).resize(function () {
		winFun();
	});
	$(window).load(function () {
		winFun();
	});
	winFun();
	
	//健康养护详情页列效果
	$(".RST85_01 li:nth-child(2n)").addClass("cu_rig");
	
	//轮播图效果
	$('.flexslider').flexslider({
		animation: "slide",
		pauseOnAction:false,
		slideshowSpeed:10000
	});
	
				//滚动数字
	$(".scrollcontainer").find("li").each(function(n) {
		$(this).find(".num").text(n+1);
	});
			
			try{
			//国际会诊-中心优势
			$(".productshow .scrollcontainer").jCarouselLite({
				btnNext: ".productshow .aright",
				btnPrev: ".productshow .aleft",
				visible:3,
				circular:false,
				speed: 500
			});
			
			}catch(e){};
			
							//滚动数字
	$(".scrollcontainer10").find("li").each(function(n) {
		$(this).find(".num").text(n+1);
	});
			
			try{
			//国际会诊-中心优势
			$(".productshow10 .scrollcontainer10").jCarouselLite({
				btnNext: ".productshow10 .aright",
				btnPrev: ".productshow10 .aleft",
				visible:3,
				circular:false,
				speed: 500
			});
			
			}catch(e){};
	
	try{
			//私人医生
			$("#exdTabConts").find(".exd_tabcont:first").show();
			$(".doc_cont0 .doc_scroll").jCarouselLite({
				btnNext: ".doc_cont .aright",
				btnPrev: ".doc_cont .aleft",
				visible:7,
				circular:false,
				speed: 500
			});
			$("#exdTabs").find("li").each(function (index) {
				$(this).click(function(){
					$(this).addClass("cur").siblings().removeClass("cur");
					$("#exdTabConts").find(".exd_tabcont:eq(" + index + ")").show().siblings().hide();
					$(".doc_cont"+ index +" .doc_scroll").jCarouselLite({
						btnNext: ".doc_cont .aright",
						btnPrev: ".doc_cont .aleft",
						visible:7,
						circular:false,
						speed: 500
					});
				});
			});

			$("#exdTabConts .exd_tabcont").each(function(i) {
				$("#docTabs"+i).tab({
					tabId: "#docTabs"+i,
					tabTag: "li",
					conId: "#docTabConts"+i,
					conTag: "div.doc_tabcont",
					auto: false,
					act: "mouseover"
				});
			});
			
			}catch(e){};
	
	try{
			//深度体验
			$(".sd_cont .sd_scroll").jCarouselLite({
				btnNext: ".sd_cont .aright",
				btnPrev: ".sd_cont .aleft",
				visible:3,
				circular:false,
				speed: 500
			});
			
			$(".sd_cont2 .sd_scroll2").jCarouselLite({
				btnNext: ".sd_cont2 .aright",
				btnPrev: ".sd_cont2 .aleft",
				visible:1,
				circular:false,
				speed: 500
			});
			}catch(e){};
	
	try{
		//私人医生切换效果
		$("#dTabs").tab({
			tabId: "#dTabs",
			tabTag: "li",
			conId: "#dTabConts",
			conTag: "div.doctor_cell",
			auto: false,
			act: "mouseover"
		});
	
		//深度体检套餐切换效果
		$("#pkTabs").tab({
			tabId: "#pkTabs",
			tabTag: "li",
			conId: "#pkTabConts",
			conTag: "div.package_cont",
			auto: false,
			act: "mouseover"
		});
	}catch(e){};
	
	//图片列表hover效果
	$(".RST31_01").find(".core").each(function() {
		$(this).find(".c_bor").hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		});
	});
	//去掉列表左侧边距
	$(".RST31_01 .core:nth-child(3n+1)").addClass("first");
	$(".RST31_01 .core:nth-child(3n+3)").addClass("last");
	
	//首页hover效果
	$(".opa_bg1").hover(function(){
		$(this).css("opacity",1).siblings(".idx_block_right").find(".opa_bg1").css("opacity",0.5);
		$(this).css("opacity",1).siblings(".opa_bg1").css("opacity",0.5);
		$(this).css("opacity",1).parent().siblings(".opa_bg1").css("opacity",0.5);
	},function(){
		$(".opa_bg1").css("opacity",1);
	});
	
	$(".opa_bg2").hover(function(){
		$(this).css("opacity",1).siblings().css("opacity",0.5);
		$(this).parents("div.ht").siblings().find(".opa_bg2").css("opacity",0.5)
	},function(){
		$(".opa_bg2").css("opacity",1);
	});
	
	

	
	//专家图片效果
	$(".scrollcontainer5 .cell").hover(function(){
		$(this).find(".doc_desc").stop(true,true).fadeIn('slow');
	},function(){
		$(this).find(".doc_desc").stop(true,true).fadeOut('slow');
	});
	
	//转诊医院
	$(".RST35_11 .core").hover(function(){
		$(this).find("h4").stop(true,true).show('slow');
	},function(){
		$(this).find("h4").stop(true,true).hide("slow");
	});
	
	//奥亚优势
	$(".RST78_01 .cell").hover(function(){
		$(this).find(".br_info").stop(true,true).fadeIn('slow');
	},function(){
		$(this).find(".br_info").stop(true,true).fadeOut('slow');
	});
	
	//健康养护效果
	$(".RST75_01 li").hover(function(){
		$(this).find(".cu_simg").addClass("hover");
	},function(){
		$(this).find(".cu_simg").removeClass("hover");
	});
	
	$(".blk4_img8 li").hover(function(){
		$(this).siblings().find(".bp_img").addClass("hover");
	},function(){
		$(this).siblings().find(".bp_img").removeClass("hover");
	});
	
	$(".RST86_01 li").hover(function(){
		$(this).find(".pl_img").addClass("hover");
	},function(){
		$(this).find(".pl_img").removeClass("hover");
	});
	
	
	
	try{
	//国际会诊-专家直通车
	$(".RST74_50 .scrollcontainer5").jCarouselLite({
		btnNext: ".RST74_50 .aright",
		btnPrev: ".RST74_50 .aleft",
		visible:3,
		circular:false,
		speed: 500
	});
	
	$("#cusnTabs").tab({
		tabId: "#cusnTabs",
		tabTag: "li",
		conId: "#cusnTabsConts",
		conTag: "div.cusn_tabcont",
		auto: false,
		act: "mouseover"
	});
	
	}catch(e){};
	
	try{
	//发展历程
	$(".RST76_01 .bd_list").jCarouselLite({
        btnNext: ".RST76_01 .aright",
        btnPrev: ".RST76_01 .aleft",
		visible:4,
		circular:false,
        speed: 500
    });	
	$("#bdTabs").tab({
		tabId: "#bdTabs",
		tabTag: "li",
		conId: "#bdTabConts",
		conTag: "div.bd_tabcont",
		auto: false,
		act: "mouseover"
	});
	
	
	//奥亚荣耀
	var carousel = $("#carousel").waterwheelCarousel();		
	$('#prev').bind('click', function () {
		carousel.prev();
		return false
	});

	$('#next').bind('click', function () {
		carousel.next();
		return false;
	});
	
	//产品
	 $(".blk6_img .pe_cont").jCarouselLite({
        btnNext: ".blk6_img .aright",
        btnPrev: ".blk6_img .aleft",
		visible:6,
		circular:false,
        speed: 500
    });
	}catch(e){};
	
	
	try{
	 $(".ex_sroll .ex_conts").jCarouselLite({
        btnNext: ".ex_sroll .aright",
        btnPrev: ".ex_sroll .aleft",
		visible:1,
		circular:false,
        speed: 1000
    });
	}catch(e){};
	
	
	try{
	//招聘
	 $(".job_cont .job_scroll").jCarouselLite({
        btnNext: ".job_cont .aright",
        btnPrev: ".job_cont .aleft",
		visible:7,
		circular:false,
        speed: 500
    });
	
	$("#jobTabs").tab({
		tabId: "#jobTabs",
		tabTag: "li",
		conId: "#jobTabsConts",
		conTag: "div.job_tabcont",
		auto: false,
		act: "mouseover"
	});
	}catch(e){};
	
	
	//底部菜单高度控制
	//$(".RMN02_03:nth-child(4n)").height(100);
	//$(".RMN02_01:nth-child(4n) ul").height(80);
	
	
	//右侧跟随鼠标效果
	$(".ROT11_01 li").hover(function(){
		$(this).siblings().addClass("hover");
	},function(){
		$(this).siblings().removeClass("hover");
	});
	$(".ROT11_01 li.li2").hover(function(){
		$(this).find(".wx_box").fadeIn();
	},function(){
		$(this).find(".wx_box").fadeOut();
	});
	
	//首页广告高度
	//$(".RAD01_01 img").height(285);
	//$(".RAD01_02 img").height(285);
	//$(".RAD01_03 img").height(360);
	
	//健康养护广告高度
	var clistH = $(".clist1").outerHeight(true);
	$(".clist10 img").height(clistH -10);
	
	//深度体验hover效果
	$(".tq_block5 li").hover(function(){
		$(this).stop(true,true).addClass("hover");
	},function(){
		$(this).stop(true,true).removeClass("hover");
	});
	$(".tq_block9 li").hover(function(){
		$(this).stop(true,true).addClass("hover");
	},function(){
		$(this).stop(true,true).removeClass("hover");
	});
	
	
	if($(".pc_tt").length>0){
		//终端页固定条效果
		$(window).scroll(function() {
			var w = $(window).scrollTop();
			var t = $(".pro_block2").offset().top + 50;
			var $fix = $(".pc_tt");
			w > t ? ($fix.addClass("detail_fix")) : ($fix.removeClass("detail_fix"));
		});
	}
	
	//产品增加广告
	if($(".RST86_21 li").length == 5){
		var proadv = '<li><img src="tpl/templates/M001/img/proadv1.jpg" alt="" /></li>';
		$(".RST86_21 ul").append(proadv);	
	}
	if($(".RST86_31 li").length == 5){
		var proadv2 = '<li><img src="tpl/templates/M001/img/proadv2.jpg" alt="" /></li>';
		$(".RST86_31 ul").append(proadv2);	
	}
	
	
	//专家咨询弹出层
	var $abox = $("#advisoryBox"),$mbox = $("#managementBox"),$sbox = $("#serviceBox");
	$("#advisory").click(function(){
		$abox.show();
	});
	$("#advisoryClose").click(function(){
		$abox.hide();
	});
	//健康管理弹出层
	$("#management").click(function(){
		$mbox.show();
	});
	$("#managementClose").click(function(){
		$mbox.hide();
	});
	//就医服务弹出层
	$("#service").click(function(){
		$sbox.show();
	});
	$("#serviceClose").click(function(){
		$sbox.hide();
	});
	

	
	
});

function Form_Ajax(formid,ajax){//ajax 添加,修改操作
	if(ajax){
		var params=$("#"+formid).serializeArray();
		$.ajax({
		   type: "POST",
		   url: "index.php?ajax="+ajax,
		   dataType:"json",
		   data:params,
		   beforeSend:function(){
			  $.prompt("<img src='"+live_site+"/images/wait.gif'/>　 正在处理中，请稍等...",{
					top:200,
					buttons: {}
			  });
		   },
		   success: function(data){
			  /*var data= eval('('+data+')');

			  switch(data[0]){
			   	   case '1'://提交后页面刷新
					 $.prompt(data[1],{top:200,buttons:{"确定":false},callback:function(){ReloadPage(data[2])}}); 
					 break;
				   case '-1'://错误刷新验证码
					 $.prompt(data[1],{top:200,buttons:{"确定":false},callback:ReloadCode});
					 break;
				   case '-2'://权限不足
				   	 $.prompt(data[1],{top:200,buttons:{"确定":false}});
					 break;
				   
				   default:
					 $.prompt('服务器正忙，稍后请重试',{top:200,buttons:{"确定":false}});
	
			   }*/
			   json_callback(data);
		   },
		   complete:function(msg){
			   $.prompt.close();
		   }
		});
	}else{
		$('#'+formid).submit();
	}
}
function json_callback(json_str){
	var data=json_str;
	if(typeof(data)=='string')
		data= eval('('+data+')');
	if(data[0]=="jquery_impromptu"){
		if(data["buttons"]==null)
			data["buttons"]={"确定":true};
		if(data["callback"]!=null){
			data["callback"]=eval(data["callback"]);
		}else{
			data["callback"]=function(){}
		}
		if(data["submit"]!=null){
			data["submit"]=eval(data["submit"]);
		}else{
			data["submit"]=function(){}
		}
		$.prompt(data["text"],{top:200,buttons:data["buttons"],callback:data["callback"],submit:data["submit"] }); 
	}else if(data[0]=="alert"){
		alert(data["html"]);
	}else if(data[0]=="html"){
		alert(data["html"]);
	}else if(data[0]=="eval"){
		eval(data['code']);
		eval(data["param"]);
	}else if(!isNaN(Number(data[0]))){
	   switch(data[0]){
		   case '1'://提交后页面刷新
			 $.prompt(data[1],{top:200,buttons:{"确定":false},callback:function(){ReloadPage(data[2])}}); 
			 break;
		   case '-1'://错误刷新验证码
			 $.prompt(data[1],{top:200,buttons:{"确定":false},callback:ReloadCode});
			 break;
		   case '-2'://权限不足
			 $.prompt(data[1],{top:200,buttons:{"确定":false}});
			 break;
		   default:
			 $.prompt('服务器正忙，稍后请重试',{top:200,buttons:{"确定":false}});

	   }	
	}else{
		$.prompt('服务器正忙，稍后请重试',{top:200,buttons:{"确定":true}});
	}
}
function closeBox(){

	$(".close").click();

}

function Form_Submit(formid){
	$('#'+formid).submit();
	
}
