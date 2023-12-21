//package esprit.tn.springp.Service;
//
//import esprit.tn.springp.Entities.Foyer;
//import esprit.tn.springp.Entities.Reservation;
//import esprit.tn.springp.Repository.ReservationRepository;
//import esprit.tn.springp.Repository.ReservationRepositoryImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Primary;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//@Primary
//@Service("ReservationService")
//public class ReservationServiceImpl implements ReservationService {
//    @Autowired
//    private ReservationRepository reservationRepository;
//
//    @Override
//    public List<Reservation> getAllReservation() {
//        return (List<Reservation>) reservationRepository.findAll();
//    }
//
//    @Override
//    public Reservation getReservationById(String idReservation) {
//        Optional<Reservation> reservation = reservationRepository.findById(idReservation);
//        return reservation.orElse(null);
//    }
//
//    @Override
//    public Reservation addReservation(Reservation r) {
//        return reservationRepository.save(r);
//    }
//
//    @Override
//    public void removeReservation(String idReservation) {
//        reservationRepository.deleteById(idReservation);
//    }
//
//    @Override
//    public Reservation modifyReservation(Reservation reservation) {
//        return reservationRepository.save(reservation);
//    }
//    public List<Reservation> searchReservationsByKeyword(String keyword) {
//        return reservationRepository.findByAnneeUniversitaireContaining(keyword);
//    }
//
//}
