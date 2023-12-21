
package esprit.tn.springp.Service;


import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChambreServiceImpl implements ChambreService {
    @Autowired
    private ChambreRepository chambreRepository;



    @Override
    public List<Chambre> getAllChambre() {
        return (List<Chambre>)chambreRepository.findAll();
    }

    @Override
    public Chambre getbyidChambre(Long idChambre) {

        Optional<Chambre> chambre = chambreRepository.findById(idChambre);
        return chambre.orElse(null);

    }

    public Chambre addChambre(Chambre ch) {
        return chambreRepository.save(ch);
    }

    @Override
    public void removeChambre(Long idChambre) {
        chambreRepository.deleteById(idChambre);

    }

  /*  @Override
    public Chambre modifyChambre(Chambre c) {
        return chambreRepository.save(c);

    }*/



}


