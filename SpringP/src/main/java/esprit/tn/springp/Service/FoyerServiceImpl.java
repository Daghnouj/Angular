package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Etudiant;
import esprit.tn.springp.Entities.Foyer;
import esprit.tn.springp.Repository.EtudiantRepository;
import esprit.tn.springp.Repository.EtudiantRepositoryImpl;
import esprit.tn.springp.Repository.FoyerRepository;
import esprit.tn.springp.Repository.FoyerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Primary
@Service("FoyerService")
public class FoyerServiceImpl implements FoyerService {
    @Autowired
    private FoyerRepository FoyerRepository;

    @Override
    public List<Foyer> getAllFoyer() {
        return (List<Foyer>) FoyerRepository.findAll();

    }

    @Override
    public Foyer getbyidFoyer(Long idFoyer) {
        Optional<Foyer> Foyer = FoyerRepository.findById(idFoyer);
        return Foyer.orElse(null);
    }

    @Override
    public Foyer addFoyer(Foyer f) {
        return FoyerRepository.save(f);
    }

    @Override
    public void removeFoyer(Long idFoyer) {
        FoyerRepository.deleteById(idFoyer);

    }
    @Override
    public Foyer modifyFoyer(Foyer f) {
        return FoyerRepository.save(f);
    }
    public List<Foyer> searchFoyersByKeyword(String keyword) {
        return FoyerRepository.findByNomFoyerContaining(keyword);
    }

}
