package esprit.tn.springp.Repository;


import esprit.tn.springp.Entities.Etudiant;
import esprit.tn.springp.Entities.Foyer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FoyerRepository extends CrudRepository<Foyer,Long> {
    List<Foyer> findByNomFoyerContaining(String keyword);
    @Query("SELECT f.universite.idUniversite FROM Foyer f WHERE f.idFoyer = :idFoyer")
    Long selectIdUniversiteByFoyerId(@Param("idFoyer") Long idFoyer);

}

