package com.yg.reservation.dao.sql;

public class ProductSqls {
	public static final String SELECT_PROMOTION 
			= "SELECT p.id, p.name, p.description, place_name "
			+ "FROM products AS p " 
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id " 
			+ "ORDER BY DESC p.id "
			+ "LIMIT 5";
	
	public static final String SELECT_SUMMARY_LIMITED_10
			= "SELECT p.id, p.name, p.description, place_name "
			+ "FROM products AS p " 
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id "
			+ "LIMIT :offset, 10";
	
	public static final String SELECT_SUMMARY_LIMITED_10_BY_CATEGORY_ID
			= "SELECT p.id, p.name, p.description, place_name "
			+ "FROM products AS p " 
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id "
			+ "WHERE catetory_id=:categoyId " 
			+ "LIMIT :offset, 10";
	
}