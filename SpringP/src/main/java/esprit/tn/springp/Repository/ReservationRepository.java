//package esprit.tn.springp.Repository;
//
//import esprit.tn.springp.Entities.Foyer;
//import esprit.tn.springp.Entities.Reservation;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface ReservationRepository extends CrudRepository<Reservation,String> {
//    List<Reservation> findByAnneeUniversitaireContaining(String keyword);
//
//
//    @Query("SELECT r.etudiant.idEtudiant FROM Reservation r WHERE r.idReservation = :idReservation")
//    String selectIdEtudiantByReservationId(@Param("idReservation") String idReservation);
//
//
//}
//
