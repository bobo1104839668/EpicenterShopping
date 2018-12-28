//配置模块
require.config({
	"paths" : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery-cookie"
		// "bootstrop" : "bootstrop"
	}
})

//导入
require(['jquery','cookie'],function($,cookie){
	$(function(){
		// $('body').append("<h1>一级标题</h1>")
	})
})