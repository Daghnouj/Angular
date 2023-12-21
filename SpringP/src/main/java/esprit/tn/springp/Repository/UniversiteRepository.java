package esprit.tn.springp.Repository;

import esprit.tn.springp.Entities.Foyer;
import esprit.tn.springp.Entities.Universite;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UniversiteRepository extends CrudRepository<Universite,Long> {
    List<Universite> findByNomUniversiteContainingOrAdresseContaining(String keywordNom, String keywordAdresse);
    @Query("SELECT u FROM Universite u JOIN Chambre c ON (c.bloc.foyer.universite.idUniversite=u.idUniversite) WHERE c.idChambre = :idChambre")
    Universite findUniversiteByIdchambre(@Param("idChambre") Long idChambre);
}
