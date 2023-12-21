//package esprit.tn.springp.ResImp;
//
//import esprit.tn.springp.Service.EtudiantService;
//import esprit.tn.springp.constents.SpringConstants;
//import esprit.tn.springp.rest.EtudiantRes;
//import esprit.tn.springp.utils.SpringUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.Map;
//@RestController
//public class EtudiantResImp implements EtudiantRes {
//
//    @Autowired
//    EtudiantService etudiantService;
//    @Override
//    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
//        try{
//            return etudiantService.signUp(requestMap); // Utilisez "signUp" ici
//        } catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return SpringUtils.getResponseEntity(SpringConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
//    }
//}
