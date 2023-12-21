//package esprit.tn.springp.Entities;
//import jakarta.persistence.*;
//import lombok.*;
//
//import java.io.Serializable;
//import java.util.Date;
//import java.util.Set;
//
//@Entity
//@Getter
//@Setter
//@ToString (includeFieldNames = false)
//@EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor
//@Table(name = "Reservation")
//public class Reservation implements Serializable {
//    private static final long serialVersionUID=1L;
//    @Id
//    @GeneratedValue (strategy = GenerationType.SEQUENCE)
//    @Setter(AccessLevel.NONE)
//    @ToString.Exclude
//    private String idReservation;
//
//    @EqualsAndHashCode.Exclude
//    @Column(name="anneeUniversitaire")
//    private Date anneeUniversitaire;
//    @Column(name="estValide")
//    private boolean estValide;
//    @ManyToMany(mappedBy = "reservations",cascade = CascadeType.ALL)
//    private Set<Etudiant> Etudinats;
//
//
//
//
//
//}
