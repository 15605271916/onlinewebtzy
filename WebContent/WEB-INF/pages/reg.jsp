<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>用户注册</title>
		
		

	</head>
	<body>
	<%@include file="nav.jsp" %>
		<div class="container">
			<div class="loginreg">
				<fieldset>
					<legend>免费注册</legend>
					
					<form action="reg.do" method="post">
					
					<table>
						<tbody>
							<tr>
								<td>账号</td>
								<td><input id="account" /name="account"> ${error }</td>
							</tr>
							<tr>
								<td>密码</td>
								<td><input id="pwd" type="password" name="pwd" /></td>
							</tr>
							<tr>
								<td>姓名</td>
								<td><input id="name" name="name" /></td>
							</tr>
							<tr>
								<td>性别</td>
								<td><input name="sex" type="radio" checked="checked" value="0">男<input name="sex" type="radio" value="1"/>女</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<button type="submit" >确定</button><a href="loginUI.do" target="_blank"> 已有账号直接登陆</a>
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
