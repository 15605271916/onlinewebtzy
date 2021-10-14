package com.tzy.onlineweb.service;

import java.util.List;

import com.tzy.onlineweb.entity.Course;

/**
 * 课程业务处理
 * @author Administrator
 *
 */
public interface ICourseService {
	/**
	 * 得到所有课程
	 * @return
	 */
	public List<Course> getAll();
	
	/**
	 * 根据编号获取课程详细信息
	 * @param id 课程编号
	 * @return 课程信息
	 */
	public Course detail(int id);
	
	/**
	 * 根据关键字搜索课程
	 * @param keyWord 关键字
	 * @return 课程信息
	 */
	public List<Course> getByKeyWord(String keyWord);
	
	
}
