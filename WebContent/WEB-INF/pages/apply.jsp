<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>我的申请课程</title>

</head>
<body>
	<%@include file="nav.jsp"%>
	<div class="container">
		<div class="searchtb" id="tb">
			<table>
				<thead>
					<tr>
						<th>图片</th>
						<th>课程名</th>
						<th>状态</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${myCourseList }" var="myApplyCourse">
						<tr>
							<td><img src="img/${myApplyCourse.img}.png" /></td>
							<td><a href="desc.do?id=${myApplyCourse.applyId}"
								target="_blank">${myApplyCourse.courseName}</a></td>
							<td>${myApplyCourse.flag}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>
