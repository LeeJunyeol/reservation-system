package com.yg.reservation.dao.sql;

public class ProductSqls {
	public static final String SELECT_PROMOTION = 
			"SELECT p.id, p.name, p.description, d.place_name "
			+ "FROM products AS p " 
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id " 
			+ "ORDER BY p.id DESC "
			+ "LIMIT 5";
	
	public static final String SELECT_SUMMARY_LIMITED_10 = 
			"SELECT p.id, p.name, p.description, d.place_name "
			+ "FROM products AS p " 
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id "
			+ "LIMIT :offset, 10";
	
	public static final String SELECT_SUMMARY_LIMITED_10_BY_CATEGORY_ID =
			"SELECT p.id, p.name, p.description, d.place_name "
			+ "FROM products AS p " 
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id "
			+ "WHERE p.category_id=:categoryId " 
			+ "LIMIT :offset, 10";

	public static final String SELECT_DETAIL = 
			"SELECT p.name, p.review_count, p.review_total_score, p.description, "
			+ "p.event, d.place_name, d.place_lot, d.place_street, "
			+ "d.tel, d.homepage, d.email, detail.content, i.file_id AS sub_image "
			+ "FROM products AS p "
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id "
			+ "INNER JOIN product_details AS detail ON p.id=detail.product_id "
			+ "LEFT JOIN product_images AS i ON p.id=i.product_id AND i.type=1 "
			+ "WHERE p.id=:id";
	
	public static final String SELECT_DISPLAY = 
			"SELECT p.name, d.place_name, d.display_start, d.display_end, d.observation_time, MIN(i.file_id) AS main_image_id "
			+ "FROM products AS p "
			+ "INNER JOIN product_displays AS d ON p.id=d.product_id "
			+ "INNER JOIN product_images AS i ON p.id=i.product_id "
			+ "WHERE p.id=:id "
			+ "GROUP BY p.id";
}