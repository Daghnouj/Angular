package esprit.tn.springp.controller;

import esprit.tn.springp.Entities.Bloc;
import esprit.tn.springp.Entities.Universite;
import esprit.tn.springp.Repository.BlocRepository;
import esprit.tn.springp.Repository.UniversiteRepository;
import esprit.tn.springp.ResourceNotFoundException;
import esprit.tn.springp.Service.UniversiteService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/universite")
public class UniversiteController {
    @Autowired
    UniversiteService universiteService;


    @GetMapping("/getAllUniversite")
    public List<Universite> getAllUniversite() {
        List<Universite> listUniversites = universiteService.getAllUniversite();
        return listUniversites;
    }

    @GetMapping("/getbyidUniversite/{idUniversite}")
    public Universite getbyidUniversite(@PathVariable("idUniversite") Long uId) {
        Universite universite = universiteService.getbyidUniversite(uId);
        return universite;
    }

    @PostMapping("/add-universite")
    public Universite addUniversite(@RequestBody Universite u) {
        Universite universite = universiteService.addUniversite(u);
        return universite;
    }

    @DeleteMapping("/remove-universite/{idUniversite}")
    public void removeUniversite(@PathVariable("idUniversite") Long uId) {
        universiteService.removeUniversite(uId);
    }

    private final UniversiteRepository UniversiteRepository;

    @Autowired
    public UniversiteController(UniversiteRepository UniversiteRepository) {

        this.UniversiteRepository = UniversiteRepository;
    }

    @Operation(description = "Modifier une université dans la base de données")
    @PutMapping("/modify-universite/{idUniversite}")
    public ResponseEntity<Universite> modifyUniversite(@RequestBody Universite u, @PathVariable Long idUniversite) {
        Optional<Universite> optionalUniversite = UniversiteRepository.findById(idUniversite);

        if (optionalUniversite.isPresent()) {
            Universite universite= optionalUniversite.get();


            if (u.getNomUniversite() != null) {
                universite.setNomUniversite(u.getNomUniversite());
            }
            if (u.getAdresse() != null) {
                universite.setAdresse(u.getAdresse());
            }


            Universite updatedUniversite = UniversiteRepository.save(universite);
            return new ResponseEntity<>(updatedUniversite, HttpStatus.OK);
        } else {
            throw new ResourceNotFoundException("Universite not found with id: " + idUniversite);
        }
    }
}