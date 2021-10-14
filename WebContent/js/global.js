// 课程数据的初始化过程

function initCourseData() {
	// 先去本地找有没有课程
	var courseList = localStorage.getItem("courseList");
	if (courseList == null) {
		var course1 = {
			"id": 1,
			"name": "java基础学习",
			"price": 1234.56,
			"img": "java.png",
			"startData": "2020-8-1",
			"desc": "Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。Java具有简单性、面向对象、分布式、健壮性、安全性、平台独立与可移植性、多线程、动态性等特点。Java可以编写桌面应用程序、Web应用程序、分布式系统和嵌入式系统应用程序等。"
		};
		var course2 = {
			"id": 2,
			"name": "html静态页面",
			"price": 2345.67,
			"img": "html.png",
			"startData": "2020-9-1",
			"desc": "HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等。超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联。这些相互关联的信息媒体可能在同一文本中，也可能是其他文件，或是地理位置相距遥远的某台计算机上的文件。这种组织信息方式将分布在不同位置的信息资源用随机方式进行连接，为人们查找，检索信息提供方便。"
		};
		var course3 = {
			"id": 3,
			"name": "mysql数据库",
			"price": 1234.56,
			"img": "mysql.png",
			"startData": "2020-8-2",
			"desc": "MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，属于Oracle旗下产品。MySQL是最流行的关系型数据库管理系统之一，在WEB应用方面，MySQL是最好的RDBMS(Relational Database Management System，关系数据库管理系统)应用软件之一。MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。MySQL所使用的SQL语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发都选择MySQL作为网站数据库。"
		};
		var course4 = {
			"id": 4,
			"name": "python数据库",
			"price": 123.45,
			"img": "python.png",
			"startData": "2020-9-1",
			"desc": "Python由荷兰数学和计算机科学研究学会的Guido van Rossum于1990年代初设计，作为一门叫做ABC语言的替代品。Python提供了高效的高级数据结构，还能简单有效地面向对象编程。Python语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言，随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。Python解释器易于扩展，可以使用C或C++（或者其他可以通过C调用的语言）扩展新的功能和数据类型。Python也可用于可定制化软件中的扩展程序语言。Python丰富的标准库，提供了适用于各个主要系统平台的源码或机器码。"
		};
		var course5 = {
			"id": 5,
			"name": "vue前端设计",
			"price": 789.45,
			"img": "vue.png",
			"startData": "2020-10-1",
			"desc": "VUE是iOS和Android平台上的一款Vlog社区与编辑工具，允许用户通过简单的操作实现Vlog的拍摄、剪辑、细调、和发布，记录与分享生活。还可以在社区直接浏览他人发布的Vlog，与Vloggers 互动。"
		};
		var course6 = {
			"id": 6,
			"name": "c++语言设计",
			"price": 6543.21,
			"img": "c++.png",
			"startData": "2020-8-1",
			"desc": "C++是C语言的继承，它既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。C++擅长面向对象程序设计的同时，还可以进行基于过程的程序设计，因而C++就适应的问题规模而论，大小由之。C++不仅拥有计算机高效运行的实用性特征，同时还致力于提高大规模程序的编程质量与程序设计语言的问题描述能力。"
		};
		var course7 = {
			"id": 7,
			"name": "javascript脚本",
			"price": 456.78,
			"img": "javascript.png",
			"startData": "2020-11-1",
			"desc": "JavaScript（简称“JS”）是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。JavaScript在1995年由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。JavaScript的标准是ECMAScript。截至2012年，所有浏览器都完整的支持ECMAScript5.1，旧版本的浏览器至少支持ECMAScript 3标准。2015年6月17日，ECMA国际组织发布了ECMAScript的第六版，该版本正式名称为ECMAScript 2015，但通常被称为ECMAScript 6或者ES2015。"
		};
		var course8 = {
			"id": 8,
			"name": "springmvc框架",
			"price": 1234.56,
			"img": "springmvc.png",
			"startData": "2020-8-1",
			"desc": "Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web Flow里面。Spring 框架提供了构建 Web 应用程序的全功能MVC模块。使用Spring可插入的MVC架构，从而在使用Spring进行WEB开发时，可以选择使用Spring的Spring MVC框架或集成其他MVC开发框架，如Struts1(现在一般不用)，Struts 2(一般老项目使用)等等。"
		};

		var courseList = new Array();
		courseList.push(course1);
		courseList.push(course2);
		courseList.push(course3);
		courseList.push(course4);
		courseList.push(course5);
		courseList.push(course6);
		courseList.push(course7);
		courseList.push(course8);
		// 把数组转化为对象
		courseList = JSON.stringify(courseList);
		localStorage.setItem("courseList", courseList);
		alert("初始化课程数据已完成！")

	} else {

	}

}
// 获取所有课程
function getAllCourse() {
	var courseList = localStorage.getItem("courseList");
	courseList = JSON.parse(courseList);
	return courseList;
}
// 根据id获取课程详情
function getCourseDetail(id) {
	var courseList = localStorage.getItem("courseList");
	courseList = JSON.parse(courseList);
	for (var course of courseList) {
		if (id == course.id) {
			return course;
		}
	}
	return null;
}

// 根据关键字查询课程
function searchCourse(keyWord) {
	var courseListSearch = new Array();
	var courseList = localStorage.getItem("courseList");
	courseList = JSON.parse(courseList);
	return courseList.filter(function(course) {
		if (course.name.includes(keyWord)) {
			return true;
		} else {
			return false;
		}
	});
}

// 保存用户信息到本地
function saveUser(user) {
	var users = localStorage.getItem("users");
	users = JSON.parse(users);
	if (users == null) {
		users = [user];
	} else {
		users.push(user);
	}
	users = JSON.stringify(users);
	localStorage.setItem("users", users);
}

// 根据账户和密码,得到用户
function getUser(account, pwd) {
	var users = localStorage.getItem("users");
	users = JSON.parse(users)
	for (var user of users) {
		if (account == user.account && pwd == user.pwd) {
			// 账号密码匹配成功
			return user;
		}
	}
	return null;
}

// 得到登录状态的数据
function getLoginStatus() {
	var str = "";
	if (document.cookie == "") {
		str =
			`<li><a href="login.html">登录</a></li>&nbsp|
			<li><a href="reg.html">注册</a></li>`;
	} else {
		var user = document.cookie.split("=")[1];
		user = JSON.parse(user);
		str =
			`<li>欢迎:${user.name}</li>
		<li><a href="../../在线选课功能/my/index.html">个人中心</a></li>
		<li><a href="javascript:void(0)" onclick="logOut()">退出</a></li>`;
	}
	return str;
}


// 保存用户申请的课程数据
function saveApply(id) {
	if (document.cookie == "") {
		return false;
	} else {
		var user = document.cookie.split("=")[1];
		user = JSON.parse(user);

		// 如何保存课程信息?三种:1.[{zhangsan:[1,2]},{lisi:[3,5,6]}]
		// 				√√√√√	2.{zhangsan:[1,2],lisi:[3,5,6]}√√√√√√√
		// 					3.Map key value(lisi,[1,2,3])
		var userApply = localStorage.getItem("userApply");
		userApply = JSON.parse(userApply);
		var account = user.account
		var course = {
			id: id,
			flag: "等待审核"
		};
		if (userApply == null) {
			// 还没有人申请过
			userApply = {};
			userApply[account] = [course];
		} else {
			// 已经有人申请过了
			var courseList = userApply[account];
			if (courseList != null) {
				courseList.push(course);
			} else {
				userApply[account] = [course];
			}
		}
		userApply = JSON.stringify(userApply);
		localStorage.setItem("userApply", userApply);
		return true;
	}
}

// 得到我的申请课程
function getMyApplyCourse() {

	// 我们要的数据
	var myApplyCourseListRS = [];
	var user = document.cookie.split("=")[1];
	user = JSON.parse(user);
	var userApply = localStorage.getItem("userApply");
	userApply = JSON.parse(userApply);
	var courseList = localStorage.getItem("courseList");
	courseList = JSON.parse(courseList);
	var myApplyCourseList = userApply[user.account];
	// [{id:1,flag:"等待审核"},{id:2,flag:"等待审核"}]
	for (var myApplyCourse of myApplyCourseList) {
		var id = myApplyCourse.id;
		var name = "";
		var img = "";
		for (var course of courseList) {
			if (course.id == id) {
				name = course.name;
				img = course.img;
				break;
			}
		}
		// 重新封装页面上的数据
		myApplyCourseListRS.push({
			id: id,
			img: img,
			name: name,
			flag: myApplyCourse.flag
		})
	}
	return myApplyCourseListRS;
}

//根据关键字搜索课程
function mySearch() {
	var keyWord = document.getElementById("keyWord").value;
	location.href = "search.do?keyWord=" + keyWord;
}
