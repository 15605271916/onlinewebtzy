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

public class descAction extends HttpServlet{
	
	private ICourseService courseService=new CourseService(); 

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		doPost(req, resp);

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//接受请求参数
		String id=req.getParameter("id");
		
		//调用业务逻辑
		Course course=courseService.detail(Integer.parseInt(id));
		
		//封装页面上的数据		
		req.setAttribute("course", course);		
				
		//页面跳转
		req.getRequestDispatcher("WEB-INF/pages/desc.jsp").forward(req, resp);
				
				
				
				
	}
	
	
	
	

}
