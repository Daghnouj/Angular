package esprit.tn.springp.Entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cache;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;
//@NamedQuery(name = "Etudiant.findByEmailId",query ="select e from Etudiant e where e.email=:email")
@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString (includeFieldNames = false)
@EqualsAndHashCode
@NoArgsConstructor
@Table(name = "Etudiant")
public class Etudiant implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    @ToString.Exclude
    private long idEtudiant;


    @EqualsAndHashCode.Exclude
    @Column(name="nomEt")
    private String nomEt;
    @Column(name="prenomEt")
    private String prenomEt;
    @Column(name="cin")
    private long cin;
    @Column(name="ecole")
    private String ecole;
    @Column(name="dateNaissance")
    private Date dateNaissance;

    @Lob
    @Column(columnDefinition = "mediumblob")
    private byte[] photo;


    @OneToOne( optional = true, cascade = CascadeType.ALL)
    private FileDB image;



}
