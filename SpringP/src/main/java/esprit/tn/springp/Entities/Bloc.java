package esprit.tn.springp.Entities;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString (includeFieldNames = false)
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Bloc")
public class Bloc implements Serializable {
    private static final long serializable=1L;
    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    @ToString.Exclude
    private long idBloc;

    @EqualsAndHashCode.Exclude
    @Column(name="nomBloc")
    private String nomBloc;
    @Column(name="capaciteBloc")
    private long capaciteBloc;
    @ManyToOne
    Foyer foyer;
    @OneToMany (cascade = CascadeType.ALL,mappedBy = "bloc")
    private Set<Chambre> chambres;








}
