define(function(){
	function getData(index){
		$.get("../json/index.json",function(data){
			let navs = data[index]['product_' + index];
			$(".divsss").append("<div class = 'bb'></div><div class = 'imgs'><p><img src='../../img/index_img/nas1.jpg'></p><p><img src='../../img/index_img/nas2.jpg'></p><p><img src='../../img/index_img/nas3.jpg'></p></div>");
			for(let s = 0;s < navs.length;s ++){
				let arr = navs[s][s+1].split(",");
				$(".bb").append("<div class='nava'><p><a href='#'>" + arr[0] + "</a><span>></span></p><ul class = 'ulsss ulsss"+s+"'></ul></div>")
				for(let j = 1;j < arr.length;j ++){
					$(".ulsss"+s+"").append("<li><a href='../html/shopList.html?type=" + encodeURI(encodeURI(arr[j])) + "'>" + arr[j] + "</a></li>")
				}
			}
		})
	}
	return {
		nav : function(id){
			let oLis = $("#" + id).children();
			for(let i=0;i < oLis.length;i ++){
				$(oLis[i]).mouseenter(function(){
					$(".divsss").html("");
					$(".divsss").css("z-index","1");
					$(this).css("background","white");
					$(this).children().css("color","#757575");
					getData(i);
				})
				$(oLis[i]).mouseleave(function(){
					$(this).css("background","#343a3a");
					$(this).children().css("color","#ffffff");
					$(".divsss").mouseenter(function(){
						$(this).css("z-index","1");
					})
					$(".divsss").mouseleave(function(){
						$(this).css("z-index","-1");
						$(".divsss").html("");
					})
				})
			}
			
		}
	}
})