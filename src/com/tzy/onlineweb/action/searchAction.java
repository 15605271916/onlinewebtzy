package com.tzy.onlineweb.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tzy.onlineweb.entity.Course;
import com.tzy.onlineweb.service.CourseService;
import com.tzy.onlineweb.service.ICourseService;

public class searchAction extends HttpServlet{
	
	private ICourseService courseService=new CourseService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		doPost(req, resp);
		
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String keyWord=req.getParameter("keyWord");
		
		List<Course> courseList=courseService.getByKeyWord(keyWord);
		
		req.setAttribute("courseList", courseList);
		
		req.getRequestDispatcher("WEB-INF/pages/search.jsp").forward(req, resp);
		
	}
	
	

}
