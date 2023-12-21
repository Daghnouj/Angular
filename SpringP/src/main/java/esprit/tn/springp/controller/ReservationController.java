//package esprit.tn.springp.controller;
//
//import esprit.tn.springp.Entities.Reservation;
//import esprit.tn.springp.Service.ReservationService;
//import lombok.AllArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@AllArgsConstructor
//@RequestMapping("/reservation")
//public class ReservationController {
//    @Autowired
//    ReservationService reservationService;
//
//
//
//    @GetMapping("/get-all-reservations")
//    public List<Reservation> getAllReservation() {
//        List<Reservation> listReservations = reservationService.getAllReservation();
//        return listReservations;
//    }
//    @GetMapping("/get-reservation/{idReservation}")
//    public Reservation getReservationById(@PathVariable("idReservation") String idReservation) {
//        Reservation reservation = reservationService.getReservationById(idReservation);
//        return reservation;
//    }
//    @PostMapping("/add-reservation")
//    public Reservation addReservation(@RequestBody Reservation r) {
//        Reservation reservation = reservationService.addReservation(r);
//        return reservation;
//    }
//    @DeleteMapping("/remove-reservation/{idReservation}")
//    public void removeReservation(@PathVariable("idReservation") String RId) {
//        reservationService.removeReservation(RId);
//    }
//    @PutMapping("/modify-reservation")
//    public Reservation modifyReservation(@RequestBody Reservation r) {
//        Reservation reservation = reservationService.modifyReservation(r);
//        return reservation;
//    }
//}
