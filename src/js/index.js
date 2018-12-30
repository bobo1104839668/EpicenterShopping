//配置模块
require.config({
	"paths" : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"slide" : "slide"
	}
})

//导入
require(['jquery','cookie',"slide"],function($,cookie,slide){
	$(function(){
		// $('body').append("<h1>一级标题</h1>")
		let section = $("div.banner").children()[0];
		slide(section);
	})
})