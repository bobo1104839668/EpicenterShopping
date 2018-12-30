define(function(){
	let index = 0;
	let timer = null;
	function slide(ele){
		clearInterval(timer);
		let means = $(ele).children();
		let img = $(means[0]);
		let lftbtn = $(means[1]);
		let rgtbtn = $(means[2]);
		auto(img);
		$(ele).mouseenter(function(){
			lftbtn.css("opacity" ,0.3);
			rgtbtn.css("opacity" ,0.3);
			clearInterval(timer);
		})
		$(ele).mouseleave(function(){
			lftbtn.css("opacity" ,0);
			rgtbtn.css("opacity" ,0);
			auto(img);
		})
		lftbtn.click(function(){
			index --;
			if(index === -1){
				index = 2;
			}
			img.attr("src","../../img/index_img/banner" + index + ".jpg")
		})
		rgtbtn.click(function(){
			index ++;
			if(index === 3){
				index = 0;
			}
			img.attr("src","../../img/index_img/banner" + index + ".jpg")
		})
		for(var i = 0;i < 3;i ++){
			img.attr("src","../../img/index_img/banner" + index + ".jpg")
		}
	}
	function auto(img){
		timer = setInterval(function(){
			index ++;
			if(index === 3){
				index = 0;
			}
			img.attr("src","../../img/index_img/banner" + index + ".jpg")
		},2000)
	}
	return slide;
})