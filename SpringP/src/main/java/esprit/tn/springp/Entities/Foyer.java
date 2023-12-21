package esprit.tn.springp.Entities;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString (includeFieldNames = false)
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Foyer")
public class Foyer implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    @ToString.Exclude
    @Column (name="id_foyer")
    private long idFoyer;
    @EqualsAndHashCode.Exclude
    @Column (name="nomFoyer")
    private String nomFoyer;
    @Column (name="capaciteFoyer")
    private long capaciteFoyer;
@OneToOne
    private Universite universite;
@OneToMany (cascade = CascadeType.ALL,mappedBy = "foyer")
private Set<Bloc> blocs;


}
