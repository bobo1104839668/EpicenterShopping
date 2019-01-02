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
		"slide1" : "slide1"
	}
})

//导入
require(['jquery','cookie',"slide","nav","sample","login","cookies","registor","slide1"],function($,cookie,slide,nav,sample,login,cookies,registor,slide1){
	$(function(){
		let section = $("div.banner").children()[0];
		let sections = $("#ps");
// 		slide(section);
		// slide1(sections);
		// slide1($("#ps1"));
		nav.nav("ul");
		sample.sample("sample");
		registor.registor();
		if(login){
			location.href = "../html/index.html";
		};
	})
})