package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Foyer;
import esprit.tn.springp.Entities.Universite;
import esprit.tn.springp.Repository.UniversiteRepository;
import esprit.tn.springp.Repository.UniversiteRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Primary
@Service("UniversiteService")
public class UniversiteServiceImpl implements UniversiteService{
    @Autowired
    private UniversiteRepository UniversiteRepository;

    @Override
    public List<Universite> getAllUniversite() {
        return (List<Universite>) UniversiteRepository.findAll();
    }

    @Override
    public Universite getbyidUniversite(Long idUniversite) {
        Optional<Universite> Universite = UniversiteRepository.findById(idUniversite);
        return Universite.orElse(null);
    }

    @Override
    public Universite addUniversite(Universite universite) {
        return UniversiteRepository.save(universite);
    }

    @Override
    public void removeUniversite(Long idUniversite) {
        UniversiteRepository.deleteById(idUniversite);

    }


}
