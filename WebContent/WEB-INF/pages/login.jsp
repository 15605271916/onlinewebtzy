<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>用户登录</title>
<script type="text/javascript">

	function login() {

		if ($("#account").val() != "" && $("#pwd").val() != "") {

			return true;

		} else {
			
			alert("账号密码不能为空");

			return false;

		}

	}
</script>

</head>
<body>
	<%@include file="nav.jsp"%>

	<div class="container">
	
		<div class="loginreg">
		
			<fieldset>
			
				<legend>用户登录</legend>

				<form action="login.do" method="post">

					<table>
						<tbody>
							<tr>
								<td>账号</td>
								<td><input id="account" name="account" />${error }</td>
							</tr>
							<tr>
								<td>密码</td>
								<td><input type="password" id="pwd" name="pwd" /></td>
							</tr>
							<tr>
								<td></td>
								<td>
									<button type="submit" onclick="return login()">确定</button>
									<a href="regUI.do" target="_blank">没有账号，前往注册</a>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</fieldset>
		</div>
	</div>

</body>
</html>
