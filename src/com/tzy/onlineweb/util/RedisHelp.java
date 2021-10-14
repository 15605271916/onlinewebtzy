package com.tzy.onlineweb.util;

import java.io.IOException;
import java.util.Properties;

import redis.clients.jedis.Jedis;

public class RedisHelp {

	private static String host;
	private static String port;

	static {

		try {
			Properties pro = new Properties();
			pro.load(RedisHelp.class.getResourceAsStream("redis.cfg.properties"));
			host = pro.getProperty("host");
			port = pro.getProperty("port");
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static Jedis getClient() {

		Jedis client = new Jedis(host, Integer.parseInt(port));

		return client;

	}

}
