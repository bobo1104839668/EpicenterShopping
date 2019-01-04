define(function(){
	function convertCartStrToObj(cartStr) {
		if(!cartStr) {
			return {};
		}
		var goods = cartStr.split(":");
		var obj = {};
		for(var i = 0; i < goods.length; i++) {
			var data = goods[i].split(",");
			//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
			obj[data[0]] = {
				name: data[1],
				price: parseFloat(data[2]),
				num: parseInt(data[3]),
				src: data[4]
			}
		}
		return obj;
	}
	
	function convertObjToCartStr(obj) {
		var cartStr = "";
		for(var id in obj) {
			if(cartStr) {
				cartStr += ":";
			}
			cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
		}
		return cartStr;
	}
	return {
		buy : function($){
			let nums = $("#num").val();
			//将商品存入cookie中
			let btns = $(".btn");
			for(let i = 0;i < btns.length;i ++){
				$(btns[i]).click(function(){
					let shop_price = parseInt($(this).parent().siblings(".price").children().text());
					let shop_id = parseInt($(this).parent().siblings().attr("shop-id"));
					let shop_msg = $(this).parent().siblings(".msga").text();
					let shop_src = $(this).parent().siblings("a").children("img").attr("src");
					let shopStr = $.cookie("shop") ? $.cookie("shop") : "";
					let shopObj = convertCartStrToObj(shopStr);
					if(shop_id in shopObj){
						shopObj[shop_id].num = parseInt(shopObj[shop_id].num) + 1;
					}else{
						console.log("不存早")
						shopObj[shop_id] = {
							name : shop_msg,
							price : shop_price,
							num : 1,
							src : shop_src
						}
					}
					shopStr = convertObjToCartStr(shopObj);
					console.log(shopStr);
					$.cookie("shop",shopStr,{expires : 265,path : "/"});
	// 					//做一个飞入购物车的效果
	// 					var cloneImg = $(this).siblings("img").clone().css({width:50,height:50});
	// 					cloneImg.fly({
	// 						start : {
	// 							top : e.clientY,
	// 							left : e.clientX
	// 						},
	// 						end :{
	// 							top : $("#lii").offset().top,
	// 							left : $("#lii").offset().left,
	// 							width:0,
	// 							height:0
	// 						},
	// 						autoPlay : true,
	// 						onEnd : function(){
	// 							$("#lii").val(function(index,v){
	// 						//"购物车（0）"
	// 						var pattern = /(\d+)/;
	// 						var num = parseInt(v.match(pattern)[1]);
	// 						return "购物车(" + (num + 1) + ")";
	// 					});
	// 					cloneImg.remove();
	// 						}
	// 					})
					nums = $("#lii span").text() ? $("#lii span").text() : 0;
					nums = nums ? nums : 0;
					nums ++;
					if(nums){
						$("#lii span").css("display","block");
						$("#lii span").html(nums);
					}	
				})
			}
			$("#lii span").html(nums);
			$("#btns").click(function(){
				$("#lii span").css("display","block");
				$("#lii span").html(nums);
			})
			let oLis = $("#side").children();
			$(oLis[1]).mouseenter(function(){
				$("#lii span").css("background","white");
				$("#lii span").css("color","orange");
			})
			$(oLis[1]).mouseleave(function(){
				if($("#lii span").html() === ""){
					$("#lii span").css("display","none");
				}
				$("#lii span").css("background","orange");
				$("#lii span").css("color","white");
			})
			$("#lii").click(function(){
				location.href="../html/shopCard.html";
			})
		}
	}
})