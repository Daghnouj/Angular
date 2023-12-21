package esprit.tn.springp.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Entities.Etudiant;
import esprit.tn.springp.Entities.FileDB;
import esprit.tn.springp.Repository.EtudiantRepository;
import esprit.tn.springp.Repository.FileDBRepository;
import esprit.tn.springp.ResourceNotFoundException;
import esprit.tn.springp.Service.EtudiantService;
import esprit.tn.springp.Service.FileStorageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Gestion Etudiant")
@RestController
@AllArgsConstructor
@RequestMapping("/etudiant")
public class EtudiantController {
    @Autowired
    EtudiantService etudiantService;
    EtudiantRepository EtudiantRepository;
    @Autowired
    FileDBRepository fileDBRepository;

    @Autowired
    FileStorageService fileStorageService;
    @Operation(description = "récupérer tous les étudiants de la base de données")
    @GetMapping("/get-all-etudiants")
    public List<Etudiant>getAllEtudiant() {
        List<Etudiant> listetudiants = etudiantService.getAllEtudiant();
        return listetudiants;
    }
    @Operation(description = "récupérer un etudiant selon son id de la base de données")
    @GetMapping("/get-etudiant/{idEtudiant}")
    public Etudiant getbyidEtudiant(@PathVariable("idEtudiant") Long etId) {
        Etudiant etudiant = etudiantService.getbyidEtudiant(etId);
        return etudiant;
    }


    @Operation(description = "Supprimer un etudiant selon son id de la base de données")
    @DeleteMapping("/remove-etudiant/{idEtudiant}")
    public void removeEtudiant(@PathVariable("idEtudiant") Long etId) {
        etudiantService.removeEtudiant(etId);
    }

//    @Operation(description = "Modifier un etudiant dans la base de données")
//    @PutMapping("/modify-etudiant")
//    public Etudiant modifyEtudiant(@RequestBody Etudiant c) {
//        Etudiant etudiant = etudiantService.modifyEtudiant(c);
//        return etudiant;
//    }
@Operation(description = "Modifier un etudiant dans la base de données")
@PutMapping("/modify-etudiant/{idEtudiant}")
public ResponseEntity<Etudiant> modifyEtudiant( @RequestBody Etudiant e, @PathVariable Long idEtudiant ,@RequestPart(value = "file", required = false) MultipartFile file) {
    Optional<Etudiant> optionalEtudiant = EtudiantRepository.findById(idEtudiant);

    if (optionalEtudiant.isPresent()) {
        Etudiant etudiant = optionalEtudiant.get();

        // Mettez à jour uniquement les champs spécifiés
        if (e.getNomEt() != null) {
            etudiant.setNomEt(e.getNomEt());
        }
        if (e.getPrenomEt() != null) {
            etudiant.setPrenomEt(e.getPrenomEt());
        }
        if (e.getCin() != 0) {
            etudiant.setCin(e.getCin());
        }
        if (e.getEcole() != null) {
            etudiant.setEcole(e.getEcole());
        }
        if (e.getDateNaissance() != null) {
            etudiant.setDateNaissance(e.getDateNaissance());
        }
        if (file != null && !file.isEmpty()) {
            try {
                etudiant.setImage(new FileDB(file.getOriginalFilename(), file.getContentType(), file.getBytes()));
            } catch (IOException ex) {
                // Gérez l'erreur d'I/O ici

            }
        }
        Etudiant updatedEtudiant = EtudiantRepository.save(etudiant);
        return new ResponseEntity<>(updatedEtudiant, HttpStatus.OK);
    } else {
        throw new ResourceNotFoundException("Etudiant not found with id: " + idEtudiant);
    }
}
    @GetMapping("/get-by-nom/{nomEt}")
    public List<Etudiant> getByNomEt(@PathVariable("nomEt") String nomEt) {
        return etudiantService.getByNomEt(nomEt);
    }



//    @PostMapping("/Add-pub")
//    @ResponseBody
//    public Publicite addUser(@RequestPart(value = "publicite") String publicite,
//                             @RequestPart(value = "image", required = false) MultipartFile file) throws IOException {
//        Publicite pub = new ObjectMapper().readValue(publicite, Publicite.class);
//        FileDB image = fileStorageService.store(file);
//        pub.setImage(image);
//        return publiciteService.Addpublicite(pub);
//    }
//    @PostMapping("/add-etudiant")
//    public Etudiant addEtudiant(@RequestBody Etudiant c ) {
//        Etudiant etudiant = etudiantService.addEtudiant(c);
//        return etudiant;
//    }
@PostMapping("/add-etudiant")
@ResponseBody
public Etudiant addEtudiant(@RequestPart(value = "etudiant") String etudiantJson, @RequestPart(value = "image", required = false) MultipartFile file) throws IOException {
    Etudiant etudiant = new ObjectMapper().readValue(etudiantJson, Etudiant.class);
    FileDB image = fileStorageService.store(file);
    etudiant.setImage(image);
    return etudiantService.addEtudiant(etudiant);
}






}
