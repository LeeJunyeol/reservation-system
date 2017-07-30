package com.ys.reservation.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ys.reservation.dao.PriceDao;
import com.ys.reservation.dao.ReservationDao;
import com.ys.reservation.domain.Price;
import com.ys.reservation.domain.ReservationInfo;
import com.ys.reservation.vo.MyReservationVo;
import com.ys.reservation.vo.ReservationVo;

@Service
public class ReservationService {
	private ReservationDao reservationDao;
	private PriceDao priceDao;

	@Autowired
	public ReservationService(ReservationDao reservationDao, PriceDao priceDao) {
		super();
		this.reservationDao = reservationDao;
		this.priceDao = priceDao;
	}
	
	public ReservationInfo create(ReservationInfo reservationInfo) {
		if(reservationInfo == null 
				|| reservationInfo.getProductId() == 0
				|| reservationInfo.getUserId() == 0 
				|| reservationInfo.getReservationName() == null
				|| reservationInfo.getReservationName().trim().isEmpty()
				|| reservationInfo.getReservationTel() == null 
				|| reservationInfo.getReservationTel().trim().isEmpty()
				|| reservationInfo.getReservationEmail() == null
				|| reservationInfo.getReservationEmail().trim().isEmpty()
				|| reservationInfo.getReservationDate() == null) {
			return null;
		}
		ReservationInfo ret = new ReservationInfo();
		ret.setId(reservationDao.insert(reservationInfo));
		return ret;
	}

	public MyReservationVo getMyReservation(int userId) {
		MyReservationVo myReservation = new MyReservationVo(0, 0, 0, 0, null);
		
		List<ReservationVo> reservations = reservationDao.selectReservations(userId);
		if (reservations == null || reservations.size() == 0) {
			return myReservation;
		}
		
		List<Integer> ids = reservations.stream().map(r -> r.getProductId())
				.distinct().collect(Collectors.toList());
		List<Price> priceList = priceDao.selectByProductIds(ids);
		Map<Integer, Map<Integer, Integer>> productIdToPrice = priceList.stream()
				.collect(Collectors.groupingBy(Price::getProductId,
						Collectors.toMap(Price::getPriceType, Price::getPrice)
				));
		
		// 0: total, 1: requested, 2: confirmed, 3: completed, 4: canceled
		int[] reservationCounts = new int[5];
		
		for(ReservationVo reservation : reservations) {
			reservationCounts[0]++;
			reservationCounts[reservation.getReservationType()]++;
			Map<Integer, Integer> typeToPrice = productIdToPrice.get(reservation.getProductId());
			int generalPrice = typeToPrice.get(1) != null ? reservation.getGeneralTicketCount() * typeToPrice.get(1) : 0;
			int youthPrice = typeToPrice.get(2) != null ? reservation.getYouthTicketCount() * typeToPrice.get(2) : 0;
			int childPrice = typeToPrice.get(3) != null ? reservation.getChildTicketCount() * typeToPrice.get(3) : 0;
			reservation.setTotalPrice(generalPrice, youthPrice, childPrice);
		}
		
		Map<Integer, List<ReservationVo>> typeToReservation = reservations.stream()
				.collect(Collectors.groupingBy(ReservationVo::getReservationType));
		
		myReservation.setScheduledReservationCount(reservationCounts[1] + reservationCounts[2]);
		myReservation.setCompletedReservationCount(reservationCounts[3]);
		myReservation.setCanceledReservationCount(reservationCounts[4]);
		myReservation.setTotalReservationCount(reservationCounts[0]);
		myReservation.setReservations(typeToReservation);
		
		return myReservation;
	}
	
	public int update(int reservationId) {
		if(reservationId<=0) {
			return 0;
		}
		return reservationDao.update(reservationId);
	}
}
