package com.tzy.onlineweb.service;

import java.util.Iterator;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.tzy.onlineweb.dao.ICourseDAO;
import com.tzy.onlineweb.dao.impl.CourseDAO;
import com.tzy.onlineweb.entity.Course;
import com.tzy.onlineweb.util.RedisHelp;

import redis.clients.jedis.Jedis;

public class CourseService implements ICourseService {
	
	private ICourseDAO courseDAO;
	
	public CourseService() {
		
		courseDAO=new CourseDAO();
	}

	@Override
	public List<Course> getAll() {
		
		List<Course> courseList;
		
		long start=System.currentTimeMillis();
		
		//使用缓存
		Jedis client=RedisHelp.getClient();
		
		String courseList_r=client.get("courseList");
		
		if(courseList_r==null) {
			
		//从数据库中获取的
		courseList=courseDAO.findAll();

		for (Iterator<Course> it = courseList.iterator(); it.hasNext();) {
			Course course =  it.next();
			course.setImg(course.getImg()+".png");
		}
		
		
		//存入到redis中
		client.set("courseList", JSON.toJSONString(courseList));
		
		}else {
			
			courseList=(List<Course>)JSONArray.parse(courseList_r);

		}
		
		long end=System.currentTimeMillis();
		
		System.out.println("获取课程耗时："+(end-start)+"毫秒");
		
		return courseList;
	}
	

	@Override
	public Course detail(int id) {
		
		Course course= courseDAO.findById(id);
		
		return course;
	}

	@Override
	public List<Course> getByKeyWord(String keyWord) {
		
		List<Course> courseList=courseDAO.findByName(keyWord);
		
		for (Iterator<Course> it = courseList.iterator(); it.hasNext();) {
			Course course = (Course) it.next();
			course.setImg(course.getImg()+".png");
		}
		
		return courseList;

	}

}

