define(function(){
	return {
		login : function(){
			let flag = false;
			$("#codess1").blur(function(){
				codes = $(this).val();
				if(codes == parseInt($("#code1").val())){
					$("#codes1").html("");
					flag = true;
				}else{
					$("#codes1").html("验证码错误");
				}
			})
			
			$("#login").click(function(){
				let uname = $("#username").val();
				let pwd = $("#password").val();
				let cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
				let obj = convertCookieStrToObj(cookieStr);
				if (obj[uname] == pwd && flag) {
					alert('登录成功！');
					location.href = '../html/index.html?user=' + encodeURI(encodeURI(uname));
					createCookie('loginUser', uname, 7);
				} else {
					alert('用户名与密码不匹配！');
				}
			})
			
		}
	}
})