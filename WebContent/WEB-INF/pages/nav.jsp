<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="css/gloabl.css" rel="stylesheet" type="text/css" />
<script src="js/global.js"></script>
<script src="js/jquery-1.10.2.js"></script>

<script>
	function logout() {

		$.ajax({

			url : 'logout.do',
			success : function() {

				$('#loginok').html('<li><a href="loginUI.do">登录</a></li><li><a href="regUI.do">注册</a></li>');
				
			}

		});

	}
</script>
<div class="nav">
	<div>
		<img src="img/1.png" width="100px" height="80px" />
	</div>
	<ul>
		<li><a href="index.do">首页</a></li>
		<li>
			<div>
				<input id="keyWord" />
				<button>
					<a href="javascript:void(0)" onclick="mySearch()">搜索</a>
				</button>
			</div>
		</li>
	</ul>

	<c:if test="${empty name }">
		<ol id="loginStatus">
			<li><a href="loginUI.do">登录</a></li>
			<li><a href="regUI.do">注册</a></li>
		</ol>
	</c:if>

	<c:if test="${!empty name }">
		<ol id="loginok">
			<li>欢迎:${name}</li>
			<li><a href="../../在线选课功能/my/index.html">个人中心</a></li>
			<li><a href="javascript:void(0)" onclick="logout()">退出</a></li>

		</ol>
	</c:if>


</div>