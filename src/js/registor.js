define(function(){
	return {
		registor : function(){
			let arr = [false, false];
			$("#registor").click(function(){
				let uname = $("username").attr("value");
				let uname = $("password").attr("value");
				let code = $("code").attr("value");
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
					cookieObj[uname] = pwd;
					cookieStr = convertObjToCookieStr(cookieObj);
					createCookie('registorUser', cookieStr, 7);
					location.href = "../html/login.html";
				}
				alert(decodeURIComponent(document.cookie))
			})
			$("login").click(function(){
				location.href = 'login.html';
			})
		}
	}
})
