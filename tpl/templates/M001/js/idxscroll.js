$(function(){
	var page = 1;     //默认页数
	var i = 1;       //第页显示个数
	var $btn = $(".change_btn span");             		//获取切换按钮
	var $parent = $btn.parents("div.v_show");     		//获取父元素
	var $v_show = $parent.find("div.v_content_list");	//获取内容区域
	var $v_content = $parent.find("div.v_content");		//获取外围DIV
	var v_width = $v_content.width();		//获取外围DIV宽度
	var len = $v_show.find("li").length;	//获取内容区域li个数
	var page_count = Math.ceil(len / i);	//总页数取整
	$("span.next").click(function(){
		if(!$v_show.is(":animated")){   //判断是否处于动画
			if(page == page_count){
				$v_show.animate({left : '0'},580);
				page = 1;
			}else{
				$v_show.animate({left : '-=' + v_width},580);
				page++;
			}
		}
		$(".highlight_tip").find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
	});
	$("span.prev").click(function(){
		if(!$v_show.is(":animated")){
			if(page == 1){
				$v_show.animate({left : '-=' + v_width*(page_count - 1) },580);
				page = page_count;
			}else{
				$v_show.animate({left : '+=' + v_width },580);
				page--;
			}	
		}
		$(".highlight_tip").find("span").eq((page - 1)).addClass("current").siblings().removeClass("current");		
	});
	var $btn_span = "<span></span>";
	var $tip = $(".highlight_tip");
	for(var j =0 ; j <= page_count-1 ; j++ ){   //追加span
		$tip.append($btn_span);	
	}
	$tip.find("span").eq(0).addClass("current");  //默认第一个span加上current类
});