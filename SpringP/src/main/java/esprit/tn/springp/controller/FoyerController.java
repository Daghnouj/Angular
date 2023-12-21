package esprit.tn.springp.controller;

import esprit.tn.springp.Entities.Foyer;
import esprit.tn.springp.Service.FoyerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/foyer")
public class FoyerController {
    @Autowired
    FoyerService foyerService;


    @GetMapping("/get-all-foyers")
    public List<Foyer> getAllFoyer() {
        List<Foyer> listFoyers = foyerService.getAllFoyer();
        return listFoyers;
    }
    @GetMapping("/get-foyer/{id-foyer}")
    public Foyer getbyidFoyer(@PathVariable("id-foyer") Long idFoyer) {
        Foyer foyer = foyerService.getbyidFoyer(idFoyer);
        return foyer;
    }
    @PostMapping("/add-foyer")
    public Foyer addFoyer(@RequestBody Foyer f) {
        Foyer foyer = foyerService.addFoyer(f);
        return foyer;
    }
    @DeleteMapping("/remove-foyer/{idFoyer}")
    public void removeFoyer(@PathVariable("idFoyer") Long chId) {
        foyerService.removeFoyer(chId);
    }
    @PutMapping("/modify-foyer/{idFoyer}")
    public Foyer modifyFoyer(@RequestBody Foyer f) {
        Foyer foyer = foyerService.modifyFoyer(f);
        return foyer;
    }
}

