define(function(){
	return {
		sample : function(className){
			let divs = $("." + className + " div");
			for(let i = 0;i < divs.length;i ++){
				$(divs[i]).mouseenter(function(){
					let ch = $(this).children()[0];
					$(ch.children[0]).animate({fontWeight : "800",marginTop : "20px",color : "#000000"},"fast")
					$(ch.children[1]).animate({color : "red"},"fast")
					$($(this).children()[1]).animate({left : '148px'},"fast")
				})
				$(divs[i]).mouseleave(function(){
					let ch = $(this).children()[0];
					$(ch.children[0]).animate({marginTop : "0"},"fast")
					$(ch.children[1]).animate({},"fast")
					$("img").animate({left : '115px'},"fast")
				})
			}
		}
	}
})