package com.tzy.onlineweb.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tzy.onlineweb.entity.UserBase;
import com.tzy.onlineweb.enums.Gender;
import com.tzy.onlineweb.service.impl.IUserBaseService;
import com.tzy.onlineweb.service.impl.UserBaseService;

public class regAction extends HttpServlet{
	
	private IUserBaseService userBaseService=new UserBaseService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String account=req.getParameter("account");
		String pwd=req.getParameter("pwd");
		String gender=req.getParameter("sex");
		String name=req.getParameter("name");
		
		UserBase userBase=new UserBase();
		userBase.setAccount(account);
		userBase.setName(name);
		userBase.setPwd(pwd);
		
		if(Gender.MAN.getKey().equals(gender)) {
			userBase.setGender(Gender.MAN);
		}else {
			userBase.setGender(Gender.WOMAN);
		}
		
		if(userBaseService.reg(userBase)==1) {
			
			//注册成功
			req.getRequestDispatcher("loginUI.do").forward(req, resp);
			
		}else {
			
			//账号已存在，注册失败
			req.setAttribute("error", "账号已经存在");
			req.getRequestDispatcher("regUI.do").forward(req, resp);
			
		}
		
	}
	
}
