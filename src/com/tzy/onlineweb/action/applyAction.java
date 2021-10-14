package com.tzy.onlineweb.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.tzy.onlineweb.service.impl.IUserBaseService;
import com.tzy.onlineweb.service.impl.UserBaseService;
import com.tzy.onlineweb.vo.ApplyedCourse;

public class applyAction extends HttpServlet {
	
	private IUserBaseService userService=new UserBaseService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		doPost(req, resp);
		
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String id=req.getParameter("id");
		
		HttpSession session=req.getSession();
		
		String account=(String)session.getAttribute("account");
		
		List<ApplyedCourse> myCourseList=userService.applyCourse(account, Integer.parseInt(id));
		
		req.setAttribute("myCourseList", myCourseList);
		
		
		req.getRequestDispatcher("WEB-INF/pages/apply.jsp").forward(req, resp);
		
		
	}
	
	

}
