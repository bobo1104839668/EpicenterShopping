define(function(){
	return {
		registor : function($){
			let arr = [false, false,false];
			let uname = null;
			let pwd = null;
			let code = null;
			let codes = null;
			$("#username").blur(function(){
				uname = $("#username").val();
				let reg = /^(\w{9,18})|(\w{3,}@(qq|163|126)\.(com|cn))$/;
				// var reg = /^\d{9,18}$/;
				if(!reg.test(uname)){
					$("#names").html("用户名不符合规则");
					arr[0] = false;
				}else{
					$("#names").html("");
					arr[0] = true;
				}
			})
			$("#password").blur(function(){
				pwd = $("#password").val();
				let reg = /^\d{6,18}$/;
				if(!reg.test(pwd)){
					$("#pwds").html("密码不符合规则");
					arr[1] = false;
				}else{
					$("#pwds").html("");
					arr[1] = true;
				}
			})
			$("#codess").blur(function(){
				codes = $(this).val();
				if(codes == parseInt($("#code").val())){
					arr[2] = true;
				}else{
					arr[2] = false;
				}
			})
			$("#registor").click(function(){
				console.log(arr);
				if (!uname) {
					alert('用户名不能为空！');
					return;
				}
				if (arr.indexOf(false) != -1) {
					alert('请正确填写信息！');
					return;
				}
				var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
				var cookieObj = convertCookieStrToObj(cookieStr);
				if (uname in cookieObj) {
					alert('用户名已存在！');
					return;
				} else {
					if($("input:checkbox[name=save]:checked").length){
						cookieObj[uname] = pwd;
						cookieStr = convertObjToCookieStr(cookieObj);
						createCookie('registorUser', cookieStr, 7);
						location.href = "../html/login.html";
					}else{
						alert("请仔细阅读并勾选阅读协议")
					}
				}
			})
		}
	}
})
