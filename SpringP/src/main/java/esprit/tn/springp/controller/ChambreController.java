package esprit.tn.springp.controller;

import esprit.tn.springp.Entities.Bloc;
import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Repository.BlocRepository;
import esprit.tn.springp.Repository.ChambreRepository;
import esprit.tn.springp.ResourceNotFoundException;
import esprit.tn.springp.Service.ChambreService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Gestion Chambre")
@RestController
@AllArgsConstructor
@RequestMapping("/chambre")
public class ChambreController {
    @Autowired
    ChambreService chambreService;

    @Operation(description = "récupérer toutes les chambres de la base de données")
    @GetMapping("/get-all-chambres")
    public List<Chambre> getAllChambre() {
        List<Chambre> listChambres = chambreService.getAllChambre();
        return listChambres;
    }

    @Operation(description = "récupérer une chambre selon son id de la base de données")
    @GetMapping("/get-chambre/{idChambre}")
    public Chambre getbyidChambre(@PathVariable("idChambre") Long chId) {
        Chambre chambre = chambreService.getbyidChambre(chId);
        return chambre;
    }

    @Operation(description = "Ajouter une chambre dans la base de données")
    @PostMapping("/add-chambre")
    public Chambre addChambre(@RequestBody Chambre ch) {
        Chambre chambre = chambreService.addChambre(ch);
        return chambre;
    }

    @Operation(description = "Supprimer une chambre selon son id de la base de données")
    @DeleteMapping("/remove-chambre/{idChambre}")
    public void removeChambre(@PathVariable("idChambre") Long chId) {
        chambreService.removeChambre(chId);
    }


    private final ChambreRepository chambreRepository;

    @Autowired
    public ChambreController(ChambreRepository chambreRepository) {

        this.chambreRepository = chambreRepository;
    }

    @Operation(description = "Modifier une chambre dans la base de données")
    @PutMapping("/modify-chambre/{idChambre}")
    public ResponseEntity<Chambre> modifyChambre(@RequestBody Chambre updatedChambre, @PathVariable Long idChambre) {
        Optional<Chambre> optionalChambre = chambreRepository.findById(idChambre);

        if (optionalChambre.isPresent()) {
            Chambre existingChambre = optionalChambre.get();

            // Mettez à jour uniquement les champs spécifiés
            if (updatedChambre.getTypeC() != null) {
                existingChambre.setTypeC(updatedChambre.getTypeC());
            }
            if (updatedChambre.getNumeroChambre() != 0) {
                existingChambre.setNumeroChambre(updatedChambre.getNumeroChambre());
            }

            Chambre savedChambre = chambreRepository.save(existingChambre);
            return new ResponseEntity<>(savedChambre, HttpStatus.OK);
        } else {
            throw new ResourceNotFoundException("Chambre not found with id: " + idChambre);
        }
    }
}