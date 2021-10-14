package com.tzy.onlineweb.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.tzy.onlineweb.dao.ICourseDAO;
import com.tzy.onlineweb.entity.Course;
import com.tzy.onlineweb.util.DBHelp;

public class CourseDAO extends BaseDAO implements ICourseDAO {

	@Override
	public List<Course> findAll() {

		List<Course> courseList = new ArrayList<Course>();

		conn = DBHelp.getconn();
		sql = " select * from course ";

		try {
			pcmd = conn.prepareStatement(sql);
			rs = pcmd.executeQuery();

			while (rs.next()) {
				// 把rs结果集的数据封装成实体对象
				Course course = new Course();
				course.setId(rs.getInt("id"));
				course.setName(rs.getString("name"));
				course.setImg(rs.getString("img"));
				course.setStartDate(rs.getDate("startdate"));
				course.setPrice(rs.getFloat("price"));
				course.setDesc(rs.getString("desc"));
				// 加入集合
				courseList.add(course);
			}
			return courseList;

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBHelp.closeConn(conn);
		}
		return null;
	}

	@Override
	public Course findById(int id) {

		conn = DBHelp.getconn();

		sql = " select * from course where id=? ";

		try {
			pcmd = conn.prepareStatement(sql);
			pcmd.setInt(1, id);
			rs = pcmd.executeQuery();
			if (rs.next()) {
				Course course=new Course();
				course.setId(id);
				course.setName(rs.getString("name"));
				course.setImg(rs.getString("img"));
				course.setPrice(rs.getFloat("price"));
				course.setDesc(rs.getString("desc"));
				course.setStartDate(rs.getDate("startdate"));
				
				return course;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			DBHelp.closeConn(conn);;
		}
		return null;
	}

	@Override
	public List<Course> findByName(String name) {

		List<Course> courseList=new ArrayList<>();
		
		conn = DBHelp.getconn();
		
		sql=" select * from course where name like ? "; 
		
		try {
			pcmd = conn.prepareStatement(sql);
			pcmd.setString(1, "%"+name+"%");
			rs = pcmd.executeQuery();
			while(rs.next()) {
				Course course=new Course();
				course.setId(rs.getInt("id"));
				course.setName(rs.getString("name"));
				course.setImg(rs.getString("img"));
				course.setPrice(rs.getFloat("price"));
				course.setDesc(rs.getString("desc"));
				course.setStartDate(rs.getDate("startdate"));
				courseList.add(course);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			
			DBHelp.closeConn(conn);;
			
		}
		
		return courseList;
	}

}
