<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>课程详情</title>
		
	</head>
	<body>
		<%@include file="nav.jsp" %>
		
		<div class="container">
			<div class="desc">
			
				<span>${course.name}</span>
				<hr />
				<p>${course.desc}</p>

			</div>
		</div>
	</body>
</html>
