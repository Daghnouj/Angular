package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Entities.Etudiant;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Map;

@Controller
public interface EtudiantService {


    public List<Etudiant> getAllEtudiant();

    public Etudiant getbyidEtudiant(Long idEtudiant);

    public Etudiant addEtudiant( Etudiant etudiant);
    public void removeEtudiant(Long idEtudiant);

    public Etudiant modifyEtudiant(Etudiant etudiant);
    public List<Etudiant> searchEtudiantsByKeyword(String keywordNom, String keywordPrenom);
//    ResponseEntity<String> signUp(Map<String, String> requestMap);
    public List<Etudiant> getByNomEt(String nomEt);
}
