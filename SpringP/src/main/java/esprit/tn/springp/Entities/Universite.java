package esprit.tn.springp.Entities;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString (includeFieldNames = false)
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Universite")
public class Universite implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    @ToString.Exclude
    private long idUniversite;

    @EqualsAndHashCode.Exclude

@Column (name="nomUniversite")
    private String nomUniversite;
    @Column (name="adrese")
    private String adresse;

@OneToOne(mappedBy="universite")
    private Foyer  foyer;


}
