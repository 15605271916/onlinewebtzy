// 获取用户详细信息
function getUserInfo() {
	var userInfo = new Map();
	// 从本地获取数据
	var user = document.cookie.split("=")[1];
	user = JSON.parse(user);
	userInfo.set("account", user.account);
	userInfo.set("name", user.name);
	userInfo.set("sex", user.sex);
	//初始都为0
	userInfo.set("applyNum", 0); //已申请的课程
	userInfo.set("waitNum", 0); //待审核的课程
	userInfo.set("okNum", 0); //已通过的课程
	userInfo.set("noNum", 0); //被拒绝的课程
	//获取申请的课程信息
	var userApply = localStorage.getItem("userApply");
	if (userApply != null) {
		userApply = JSON.parse(userApply);
		//继续判断是否是当前用户申请
		var applyCourseList = userApply[user.account];
		if (applyCourseList != null) {
			userInfo.set("applyNum", applyCourseList.length); //已申请的课程
			for (var applyCourse of applyCourseList) {
				if (applyCourse.flag == "等待审核") { //待审核的课程
					userInfo.set("waitNum", userInfo.get("waitNum") + 1);
				}
				if (applyCourse.flag == "同意学习") { //已通过的课程
					userInfo.set("okNum", userInfo.get("okNum") + 1);
				}
				if (applyCourse.flag == "拒绝学习") { //被拒绝的课程
					userInfo.set("noNum", userInfo.get("noNum") + 1);
				}
			}
		}
	}
	return userInfo;
}

// 得到用户信息
function getUser() {
	var userInfo = new Map();
	var user = document.cookie.split("=")[1];
	user = JSON.parse(user);
	userInfo.set("account", user.account);
	userInfo.set("name", user.name);
	userInfo.set("sex", user.sex);
	userInfo.set("pwd", user.pwd);
	return userInfo;
}

// 更新用户数据
function updataUser(user) {
	var loginUser = document.cookie.split("=")[1];
	loginUser = JSON.parse(loginUser);
	user.account = loginUser.account;
	var users = localStorage.getItem("users");
	users = JSON.parse(users);
	for (var i = 0; i < users.length; i++) {
		if (users[i].account == user.account) {
			users[i] = user;
			document.cookie = "user=" + JSON.stringify(user) +
				";path=/%E5%9C%A8%E7%BA%BF%E9%80%89%E8%AF%BE%E5%8A%9F%E8%83%BD";
			break;
		}
	}
	localStorage.setItem("users", JSON.stringify(users));
	// alert("保存成功")
}

function getMyApplyCourse() {
	var loginUser = document.cookie.split("=")[1];
	loginUser = JSON.parse(loginUser);
	var userApply = localStorage.getItem("userApply");
	if (userApply == null) {
		return null;

	} else {
		userApply = JSON.parse(userApply);
		var myApplyCourseList = userApply[loginUser.account];
		var courseList = localStorage.getItem("courseList");
		courseList = JSON.parse(courseList);

		var myApplyCourseListVO = [];
		for (var myApplyCourse of myApplyCourseList) {
			for (var course of courseList) {
				if (course.id == myApplyCourse.id) {
					var myApplyCourseVO = course;
					myApplyCourseVO.flag = myApplyCourse.flag;
					myApplyCourseListVO.push(myApplyCourseVO);
					break;
				}
			}
		}
		return myApplyCourseListVO;
	}
}
