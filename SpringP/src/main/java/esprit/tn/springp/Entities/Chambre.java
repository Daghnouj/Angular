package esprit.tn.springp.Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.*;

import java.io.Serializable;
import java.util.Set;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Chambre")
public class Chambre implements Serializable {
    private static final long serialVersionUID=1l;
    @Id
    @GeneratedValue
    @Column(name="idChambre")
    private long idChambre;

    @Column(name="numeroChambre")
    private long numeroChambre;
    @Column(name="typeC")
    @Enumerated(EnumType.STRING)
    private TypeChambre typeC;

    @ManyToOne
    @JoinColumn(name = "bloc_id")
    Bloc bloc;
   /* @OneToMany(cascade = CascadeType.ALL)
    private Set<Reservation>reservations;*/


}
