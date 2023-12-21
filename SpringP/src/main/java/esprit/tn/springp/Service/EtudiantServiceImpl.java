package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Etudiant;
import esprit.tn.springp.Repository.EtudiantRepository;

import esprit.tn.springp.Repository.EtudiantRepositoryImpl;
import esprit.tn.springp.constents.SpringConstants;
import esprit.tn.springp.utils.SpringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Slf4j
@Primary
@Service("EtudiantService")
public class EtudiantServiceImpl implements EtudiantService {
@Autowired
private EtudiantRepository EtudiantRepository;


  /*@Override
    public void test(){
        System.out.println("tesst");
    }*/







  @Override
    public List<Etudiant> getAllEtudiant() {
        return (List<Etudiant>) EtudiantRepository.findAll();

    }

    @Override
    public Etudiant getbyidEtudiant(Long idEtudiant) {

        Optional<Etudiant> etudiant = EtudiantRepository.findById(idEtudiant);
        return etudiant.orElse(null);

    }

//    public Etudiant addEtudiant(Etudiant c) {
//        return EtudiantRepository.save(c);
//    }
public Etudiant addEtudiant(Etudiant etudiant) {
    return EtudiantRepository.save(etudiant);
}
    @Override
    public void removeEtudiant(Long idEtudiant) {
        EtudiantRepository.deleteById(idEtudiant);

    }

    @Override
    public Etudiant modifyEtudiant(Etudiant etudiant) {
        return EtudiantRepository.save(etudiant);

    }

    public List<Etudiant> searchEtudiantsByKeyword(String keywordNom, String keywordPrenom) {
        return EtudiantRepository.findByNomEtContainingOrPrenomEtContaining(keywordNom, keywordPrenom);
    }

//    @Override
//    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
//      log.info("Inside signup {}",requestMap);
//
//        try {
//            if (validateSignUpMap(requestMap)) {
//
//                Etudiant etudiant = EtudiantRepository.findByEmailId(requestMap.get("email"));
//                if (Objects.isNull(etudiant)) {
//                    EtudiantRepository.save(getEtudiantFromMap(requestMap));
//                    return SpringUtils.getResponseEntity("Successfully Registered", HttpStatus.OK);
//                } else {
//                    return SpringUtils.getResponseEntity("Email already exists", HttpStatus.BAD_REQUEST);
//                }
//            } else {
//                return SpringUtils.getResponseEntity(SpringConstants.INVALID_DATA, HttpStatus.BAD_REQUEST);
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//return SpringUtils.getResponseEntity(SpringConstants.SOMETHING_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
//    }
//    private boolean validateSignUpMap(Map<String, String> requestMap) {
//        // Vérifier si les clés nécessaires sont présentes dans la map
//        return requestMap.containsKey("nomEt")
//                && requestMap.containsKey("prenomEt")
//                && requestMap.containsKey("cin")
//                && requestMap.containsKey("ecole")
//                && requestMap.containsKey("dateNaissance")
//                && requestMap.containsKey("email")
//                && requestMap.containsKey("password");
//    }
//
//    private Etudiant getEtudiantFromMap(Map<String, String> requestMap) {
//        Etudiant etudiant = new Etudiant();
//        etudiant.setNomEt(requestMap.get("nomEt"));
//        etudiant.setPrenomEt(requestMap.get("prenomEt"));
//        etudiant.setCin(Long.parseLong(requestMap.get("cin")));
//        etudiant.setEcole(requestMap.get("ecole"));
//        String dateString = requestMap.get("dateNaissance");
//        try {
//            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd"); // ou le format de votre date
//            Date dateNaissance = dateFormat.parse(dateString);
//            etudiant.setDateNaissance(dateNaissance);
//        } catch (ParseException e) {
//            // Gérer l'exception (par exemple, log ou jeter une nouvelle exception)
//            e.printStackTrace();
//        }
//        etudiant.setEmail(requestMap.get("email"));
//        etudiant.setPassword(requestMap.get("password"));
//        etudiant.setRole("etudiant");
//        return etudiant;
//    }
    @Override
    public List<Etudiant> getByNomEt(String nomEt) {
        return EtudiantRepository.getByNomEt(nomEt);
    }

}
