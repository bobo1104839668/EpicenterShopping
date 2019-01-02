define(function(){
	return {
		sample : function(className){
			let divs = $("." + className + " div");
			for(let i = 0;i < divs.length;i ++){
				$(divs[i]).mouseenter(function(){
					let ch = $(this).children()[0];
					$(ch.children[0]).animate({fontWeight : "800",marginTop : "20px",color : "#000000"},240)
					$(ch.children[1]).animate({color : "red"},250)
					$($(this).children()[1]).animate({left : '148px'},250)
				})
				$(divs[i]).mouseleave(function(){
					let ch = $(this).children()[0];
					$(ch.children[0]).animate({marginTop : "0"},250)
					$(ch.children[1]).animate({},250)
					$("img").animate({left : '115px'},250)
				})
			}
		}
	}
})