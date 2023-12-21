package esprit.tn.springp.Repository;


import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Entities.Etudiant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EtudiantRepository extends CrudRepository<Etudiant,Long> {

    List<Etudiant> findByNomEtContainingOrPrenomEtContaining(String keywordNom, String keywordPrenom);
    @Query("SELECT c.idChambre FROM Chambre c WHERE c.numeroChambre = :numeroChambre")
    Long selectIdChambreBynumeroChambre(@Param("numeroChambre") long numeroChambre);

//    Etudiant findByEmailId(@Param("email") String email);

    public List<Etudiant> getByNomEt(String nomEt);

}
