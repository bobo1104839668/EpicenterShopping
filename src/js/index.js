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
		"registor" : "registor"
	}
})

//导入
require(['jquery','cookie',"slide","nav","sample","login","cookies","registor"],function($,cookie,slide,nav,sample,login,cookies,registor){
	$(function(){
		let section = $("div.banner").children()[0];
		// slide(section);
		nav.nav("ul");
		sample.sample("sample");
		console.log(1);
		registor.registor();
		if(login){
			location.href = "../html/index.html";
		};
	})
})