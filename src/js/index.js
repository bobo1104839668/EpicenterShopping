//配置模块
require.config({
	"paths" : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"slide" : "slide",
		"nav" : "nav",
		"sample" : "sample",
		"login" : "login",
		"cookies" : "cookie",
		"registor" : "registor",
		"slide1" : "slide1",
		"mark" : "bigGlass",
		"buy" : "buy"
	}
})

//导入
require(['jquery','cookie',"slide","nav","sample","login","cookies","registor","slide1","mark","buy"],function($,cookie,slide,nav,sample,login,cookies,registor,slide1,mark,buy){
	$(function(){
		let section = $("div.banner").children()[0];
		let sections = $("#ps");
		//首页轮播动画
// 		slide(section);
		// slide1(sections);
		// slide1($("#ps1"));
		//导航菜单
		nav.nav("ul");
		//首页苹果框动画
		sample.sample("sample");
		//查看商品（放大镜）
		mark.mark("big");
		//详情添加购物车
		buy.buy();
		registor.registor();
		if(login){
			location.href = "../html/index.html";
		};
	})
})