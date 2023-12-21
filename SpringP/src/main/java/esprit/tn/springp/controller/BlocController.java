package esprit.tn.springp.controller;


import esprit.tn.springp.Entities.Bloc;
import esprit.tn.springp.Repository.BlocRepository;
import esprit.tn.springp.ResourceNotFoundException;
import esprit.tn.springp.Service.BlocService;
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
@RequestMapping("/bloc")
public class BlocController {
@Autowired
    BlocService blocService;
 @GetMapping("/retrieve-all-blocs")
    public List<Bloc> getBlocs() {
        List<Bloc> listblocs = blocService.retrieveAllBlocs();
        return listblocs;
    }

    @GetMapping("/retrieve-bloc/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long chId) {
        Bloc bloc = blocService.retrieveBloc(chId);
        return bloc;
    }

    @PostMapping("/add-bloc")
    public Bloc addBloc(@RequestBody Bloc b) {
        Bloc bloc = blocService.addBloc(b);
        return bloc;
    }

    @DeleteMapping("/remove-bloc/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id") Long chId) {
        blocService.removeBloc(chId);
    }

    private final BlocRepository blocRepository;

    @Autowired
    public BlocController(BlocRepository blocRepository) {

        this.blocRepository = blocRepository;
    }

    @Operation(description = "Modifier un bloc dans la base de données")
    @PutMapping("/modify-bloc/{idBloc}")
    public ResponseEntity<Bloc> modifyBloc(@RequestBody Bloc b, @PathVariable Long idBloc) {
        Optional<Bloc> optionalBloc = blocRepository.findById(idBloc);

        if (optionalBloc.isPresent()) {
            Bloc bloc = optionalBloc.get();

            // Mettez à jour uniquement les champs spécifiés
            if (b.getNomBloc() != null) {
                bloc.setNomBloc(b.getNomBloc());
            }
            if (b.getCapaciteBloc() != 0) {
                bloc.setCapaciteBloc(b.getCapaciteBloc());
            }


            Bloc updatedBloc = blocRepository.save(bloc);
            return new ResponseEntity<>(updatedBloc, HttpStatus.OK);
        } else {
            throw new ResourceNotFoundException("Bloc not found with id: " + idBloc);
        }
    }

    /*  @GetMapping("chambre/{idBloc}")
      public ResponseEntity<Chambre> getChambreForBloc(@PathVariable Long idBloc) {
          Chambre chambre = blocService.getChambreForBloc(idBloc);

          if (chambre != null) {
              return new ResponseEntity<>(chambre, HttpStatus.OK);
          } else {
              return new ResponseEntity<>(HttpStatus.NOT_FOUND);
          }
      }*/
   /* @GetMapping("/get-by-nom/{nomBloc}")
    public List<Bloc> getByNomBloc(@PathVariable("nomBloc") String nomBloc) {
        return blocService.getByNomBloc(nomBloc);
    }*/
}

