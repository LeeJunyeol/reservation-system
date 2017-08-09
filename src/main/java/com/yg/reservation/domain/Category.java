package com.yg.reservation.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Category {
	private int id;
	private String name;
	private int productCount;
}
