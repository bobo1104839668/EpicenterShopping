define(function(){
	function convertshopStrToObj(shopStr){
		if(!shopStr){
			return {};
		}
		var goods = shopStr.split(":");
		var obj = {};
		for(var i = 0; i < goods.length; i ++){
			var data = goods[i].split(",");
			//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
			obj[data[0]] = {
				name : data[1],
				price : parseFloat(data[2]),
				num : parseInt(data[3]),
				src : data[4]
			}
		}
		return obj;
	}
	function convertObjToshopStr(obj){
			var shopStr = "";
			for(var id in obj){
				if(shopStr){
					shopStr += ":";
				}
				shopStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
			}
			return shopStr;
	}
	return {
		shopCookie : function($){
				let index = 0;
				let sum = 0;
				let sums = 0;
				var shopStr = $.cookie("shop") ? $.cookie("shop") : "";
				var shopObj = convertshopStrToObj(shopStr);
				for(let id in shopObj) {
					var shop = shopObj[id];
					var str = '<div class="selec1" id = "' + index ++ + '"><p><input type="checkbox" name="selector" id="selector1" value="" /></p>' +
				'<p><img src="'+shop.src+'" ></p>' +
				'<p>' + shop.name + '</p>' +
				'<p class="pss" shop-id = "'+id+'"><input type="button" name="reduce" id="reduce" class="reduce" value="-" /><input type="text" name="num" class="num" id="num" value="' + shop.num + '" /><input type="button" name="add" class="add" id="add" value="+" /></p>' +
				'<p>' + shop.price + '.00</p><p></p><p>' + shop.num * shop.price + '.00 <span></span></p></div>';
					//将上面的结构添加到shopList中去
					$(str).insertBefore(".selec2");
					sum += shop.num * shop.price;
					sums += shop.num;
				}
				$("#money").text(sum);
				$("#n").text(index);
				$("#m").text(sums);
				$("#red").css("width",sums);
				$("#bus").text(sums);
				$("#lii span").text(sums);
				$('#delete').click(function() {
					let ids = [];
					$("input[name='selector']:checked").each(function(i){
						let id = $(this).parent(".selec1").children("p.pss").attr("shop-id");
						$(this).parent(".selec1").remove();
						console.log($(this).parent(".selec1"))
						ids.push(i);
					})
					//在页面上将商品信息删除，顺便获取一个该商品的id
					//从cookie中将该商品删除
					var shopStr = $.cookie("shop") ? $.cookie("shop") : "";
					var shopObj = convertshopStrToObj(shopStr);
								
					for(var i = 0;i < ids.length;i ++){
						delete shopObj[ids[i]];
					}
					//将新商品信息放回cookie
					$.cookie('shop', convertObjToshopStr(shopObj), {
						expires: 7,
						path: "/"
					});
				})
				//给增加按钮添加事件
				$(".add").click(function() {
					let id = $(this).parent('.pss').attr("shop-id");
					let shopStr = $.cookie("shop") ? $.cookie("shop") : "";
					let shopObj = convertshopStrToObj(shopStr);
					shopObj[id].num += 1;
					//将页面上显示的数量加1
					$(this).siblings("#num").val("" + shopObj[id].num);
					//更新页面上的小计
					$(this).parent().siblings('#money').html(shopObj[id].num * shopObj[id].price + ".00");
					//将信息放回cookie
					$.cookie('shop', convertObjToshopStr(shopObj), {
						expires: 7,
						path: "/"
					});
				});
				//给减按钮添加点击事件
				$(".reduce").click(function(){
					let id = $(this).parent('.pss').attr("shop-id");
					var shopStr = $.cookie("shop") ? $.cookie("shop") : "";
					var shopObj = convertshopStrToObj(shopStr);
					if(shopObj[id].num > 1){ //商品数量减少不能少于1
						shopObj[id].num -= 1;
						//将页面上显示的数量减1
						$(this).siblings("#num").val("" + shopObj[id].num);
						//更新页面上的小计
						$(this).parent().siblings('#money').html(shopObj[id].num * shopObj[id].price + "");
						//将信息放回cookie
						$.cookie('shop', convertObjToshopStr(shopObj), {
							expires: 7,
							path: "/"
						});
					}
					
					
				});
				
				//改数量的input绑定一个blur事件
				$(".num").blur(function(){
					let id = $(this).parent('.pss').attr("shop-id");
					var shopStr = $.cookie("shop") ? $.cookie("shop") : "";
					var shopObj = convertshopStrToObj(shopStr);
					//判断用户输入是否合法
					var pattern = /^\d+$/;
					if(!pattern.test($(this).val())){
						shopObj[id].num = 1;
						$(this).val("1");
					}else{
						//修改一下数量
						shopObj[id].num = parseInt($(this).val());
						console.log($(this).val())
					}
					$(this).val("" + shopObj[id].num);
					//更新页面上的小计
					$(this).parents(".selec1").siblings('.selec2').children("p #money").html(shopObj[id].num * shopObj[id].price + "");
					//将信息放回cookie
					$.cookie('shop', convertObjToshopStr(shopObj), {
						expires: 7,
						path: "/"
					});
				})
					
		}
	}
})