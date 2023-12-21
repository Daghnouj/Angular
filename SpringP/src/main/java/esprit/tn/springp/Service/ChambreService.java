package esprit.tn.springp.Service;


import esprit.tn.springp.Entities.Chambre;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public interface ChambreService {
  public List<Chambre> getAllChambre();

  public Chambre getbyidChambre(Long idChambre);

  public Chambre addChambre(Chambre f);

  public void removeChambre(Long idChambre);

  //  public Chambre modifyChambre(Chambre chambre);
  //  public List<Chambre> searchChambreByKeyword(String keyword);
}
