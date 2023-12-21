package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Foyer;
import esprit.tn.springp.Entities.Universite;

import java.util.List;

public interface UniversiteService {
    public List<Universite> getAllUniversite();

    public Universite getbyidUniversite(Long idUniversite);

    public Universite addUniversite(Universite universite);
    public void removeUniversite(Long idUniversite);


}
