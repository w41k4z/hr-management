package com.example.springserve.fichedeposteaffiliation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Fichedeposteaffiliation")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class FichedeposteaffiliationController {
    @Autowired
    private FichedeposteaffiliationService fichedeposteaffiliationService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Fichedeposteaffiliation> getAllFichedeposteaffiliation() {
        return fichedeposteaffiliationService.getAllFichedeposteaffiliations();
    }

    @PostMapping("/save")
    public Fichedeposteaffiliation saveFichedeposteaffiliation(@RequestBody Fichedeposteaffiliation fichedeposteaffiliation) {
        return fichedeposteaffiliationService.saveFichedeposteaffiliation(fichedeposteaffiliation);
    }

    @GetMapping("/getById/{id}")
    public Fichedeposteaffiliation getFichedeposteaffiliationById(@PathVariable Long id) {
        return OptionalGet.get(fichedeposteaffiliationService.getFichedeposteaffiliationById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteFichedeposteaffiliation(@PathVariable Long id) {
        fichedeposteaffiliationService.deleteFichedeposteaffiliation(id);
    }
}
