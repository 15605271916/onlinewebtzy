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

public class loginAction extends HttpServlet{
	
	private IUserBaseService userBaseService=new UserBaseService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String account=req.getParameter("account");
		String pwd=req.getParameter("pwd");
		
		UserBase userBase=userBaseService.login(account, pwd);
		
		if(userBase!=null 	) {
			
			//登陆成功
			req.getSession().setAttribute("name", userBase.getName());
			req.getSession().setAttribute("account", userBase.getAccount());
			
			req.getRequestDispatcher("index.do").forward(req, resp);
			
		}else {
			
			//登录失败
			req.getSession().setAttribute("error", "账号密码不一致");
			req.getRequestDispatcher("loginUI.do").forward(req, resp);
			
		}
		
	}
	
}
