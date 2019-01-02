define(function(){
	let index = 1;
	let timer = null;
	function slide(ele){
		let uls = $(ele).parent().children()[2];
		let oLis = $(uls).children();
		clearInterval(timer);
		let means = $(ele).children();
		let img = $(means[0]);
		let lftbtn = $(means[1]);
		let rgtbtn = $(means[2]);
		auto(img,oLis);
		for(var i = 1;i <= 3;i ++){
			img.attr("src","../../img/index_img/ps" + index + ".jpg")
			$(oLis[i]).css("background","gray");
		}
		$(ele).mouseenter(function(){
			lftbtn.css("opacity" ,0.3);
			rgtbtn.css("opacity" ,0.3);
			$(uls).css("opacity" ,0.5);
			clearInterval(timer);
		})
		$(ele).mouseleave(function(){
			lftbtn.css("opacity" ,0);
			rgtbtn.css("opacity" ,0);
			$(uls).css("opacity" ,0);
			auto(img,oLis);
		})
		lftbtn.click(function(){
			index --;
			if(index === 0){
				index = 3;
			}
			for(var i = 1;i <= 3;i ++){
				img.attr("src","../../img/index_img/ps" + index + ".jpg")
				$(oLis[i-1]).css("background","gray");
			}
			$(oLis[index-1]).css("background","red");
		})
		$(uls).mouseover(function(){
			$(this).css("opacity",0.5);
			clearInterval(timer)
		})
		for(let i = 0;i < oLis.length;i ++){
			$(oLis[i]).click(function(){
				index = i + 1;
				img.attr("src","../../img/index_img/ps" + index + ".jpg");
				for(var j = 1;j <= 3;j ++){
					$(oLis[j-1]).css("background","gray");
				}
				$(oLis[i]).css("background","red");
			})
		}
		rgtbtn.click(function(){
			index ++;
			if(index === 4){
				index = 1;
			}
			for(var i = 1;i <= 3;i ++){
				img.attr("src","../../img/index_img/ps" + index + ".jpg")
				$(oLis[i-1]).css("background","gray");
			}
			$(oLis[index-1]).css("background","red");
		})
	}
	function auto(img,oLis){
		timer = setInterval(function(){
			index ++;
			if(index === 4){
				index = 1;
			}
			for(var i = 1;i <= 3;i ++){
				$(oLis[i]).css("background","gray");
			}
			img.attr("src","../../img/index_img/ps" + index + ".jpg");
			$(oLis[index-1]).css("background","red");
		},2000)
	}
	return slide;
})