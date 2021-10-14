<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>在线报名系统主页面</title>

<script>

			// 退出登录
			function logOut() {
				var date = new Date("1970-1-1");
				date = date.toGMTString();
				document.cookie = "user=0;expires=" + date;
				location.href = "index.html";
			}
			
			//申请课程
			function applyCourse(id) {
				
				if($("#account").val() != ""){
					
					alert("请先登录！");
					
				}else{
					
					location.href = "apply.do?id="+id;
				}
				
			}
		</script>
</head>
<body>

<%@include file="nav.jsp" %>

	<div class="container">

		<div class="courseList">

			<c:forEach items="${courseList }" var="course">
				<div>
					<img src="img/${course.img }" />
					<ul>
						<li><a href="desc.do?id=${course.id }" target="_blank">${course.name }</a></li>
						<li>价格： <span>${course.price }</span></li>
						<li>开班时间：${course.startDate }</li>
						<li><a href="javascript:void(0)"
							onclick="applyCourse(${course.id})">申请</a></li>
					</ul>
				</div>
			</c:forEach>
		</div>

	</div>
	<hr />
	<div class="foot">
		版权所有© 博为峰 <a href="#">后台管理</a>
	</div>
</body>
</html>
