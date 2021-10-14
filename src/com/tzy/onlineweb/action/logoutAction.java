package com.tzy.onlineweb.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.tzy.onlineweb.entity.Course;
import com.tzy.onlineweb.service.CourseService;
import com.tzy.onlineweb.service.ICourseService;

public class logoutAction extends HttpServlet{
	
	private ICourseService courseService=new CourseService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		HttpSession session=req.getSession();
		
		session.removeAttribute("name");
		
		/*
		 * //再次从数据库中读取课程
		List<Course> courseList=courseService.getAll();
		req.setAttribute("courseList", courseList);
		
		//输出到页面
		req.getRequestDispatcher("WEB-INF/pages/index.jsp").forward(req, resp);
*/
		
		
	}
	
	

}
