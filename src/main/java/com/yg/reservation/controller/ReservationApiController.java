package com.yg.reservation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yg.reservation.domain.Reservation;
import com.yg.reservation.domain.User;
import com.yg.reservation.security.AuthUser;
import com.yg.reservation.service.ReservationService;
import com.yg.reservation.vo.MyReservationVo;
import com.yg.reservation.vo.ReservationVo;

@RestController
@RequestMapping("/api/reservations")
public class ReservationApiController {
	ReservationService reservationService;

	@Autowired
	public ReservationApiController(ReservationService reservationService) {
		this.reservationService = reservationService;
	}

	@PostMapping
	public boolean add(@RequestBody ReservationVo reservationVo,
			@AuthUser User user) {
		Reservation reservation = reservationVo.getReservation();
		reservation.setUser(user);
		return reservationService.add(reservation, reservationVo.getProductId());
	}

	@GetMapping("/my")
	public MyReservationVo getMy(@AuthUser User user) {
		return reservationService.getByUserId(user.getId());
	}

}
