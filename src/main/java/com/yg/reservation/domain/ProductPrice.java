package com.yg.reservation.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="product_prices")
@Getter
@Setter
@ToString(exclude="product")
public class ProductPrice {
	@Id
	@GeneratedValue(generator = "native")
	@GenericGenerator(name="native", strategy="native")
	private int id;
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="product_id")
	@JsonIgnore
	private Product product;
	@Column(name="price_type")
	private int priceType;
	private int price;
	@Column(name="discount_rate")
	private int discountRate;
	@Column(name = "create_date", nullable = false, updatable = false, insertable = false, 
			columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createDate;
	@Column(name = "modify_date", nullable = false, updatable = false, insertable = false, 
			columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	private Date modifyDate;
}
