package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Etudiant;
import esprit.tn.springp.Entities.Foyer;

import java.util.List;

public interface FoyerService {

    public List<Foyer> getAllFoyer();

    public Foyer getbyidFoyer(Long idFoyer);

    public Foyer addFoyer(Foyer foyer);
    public void removeFoyer(Long idFoyer);

    public Foyer modifyFoyer(Foyer foyer);
    public List<Foyer> searchFoyersByKeyword(String keyword);
}

