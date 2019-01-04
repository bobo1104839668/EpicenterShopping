define(function(){
	return {
		mark : function(id){
			let marks = $("#" + id).children();
			let index = 0;
			let oLis = $(marks[1]).children();
			for(let i = 0;i < oLis.length;i ++){
				$(oLis[i]).mouseenter(function(){
					index = i;
					$("#imgg").attr("src","../../img/shopMsg_img/121704_" + index + ".jpg");
					$("#small").html("<img src='../../img/shopMsg_img/121704_" + index + ".jpg' />")
				})
			}
			$("#mark").mouseenter(function(){
				$("#float").css("display","block");
				$("#small").css("display","block");
			}) 
			$("#mark").mouseleave(function(){
				$("#float").css("display","none");
				$("#small").css("display","none");
			}) 
			$("#mark").mousemove(function(){
				let left = event.pageX - $("#float").width() / 2 - $(this).offset().left;
				let top = event.pageY - $("#float").height() / 2 - $(this).offset().top;
				if(left < 0){
					left = 0;
				}else if(left > $(this).width() - $("#float").width()){
					left = $(this).width() - $("#float").width();
				}
				if(top < 0){
					top = 0;
				}else if(top > $(this).height() - $("#float").height()){
					top = $(this).height() - $("#float").height();
				}
				$("#float").css("left",left);
				$("#float").css("top",top);
				$("#small").html("<img src='../../img/shopMsg_img/121704_" + index + ".jpg' />")
				let paX = left / ($(this).width() - $("#float").width());
				let paY = top / ($(this).height() - $("#float").height());
				$("#small img").css("left", - paX * ($("#small img").width() - $("#small").width()));
				$("#small img").css("top", - paY * ($("#small img").height() - $("#small").height()));
			})
		}
	}
})