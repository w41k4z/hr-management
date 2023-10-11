package com.example.springserve.affiliation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Affiliation")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class AffiliationController {
    @Autowired
    private AffiliationService affiliationService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Affiliation> getAllAffiliation() {
        return affiliationService.getAllAffiliations();
    }

    @PostMapping("/save")
    public Affiliation saveAffiliation(@RequestBody Affiliation affiliation) {
        return affiliationService.saveAffiliation(affiliation);
    }

    @GetMapping("/getById/{id}")
    public Affiliation getAffiliationById(@PathVariable Long id) {
        return OptionalGet.get(affiliationService.getAffiliationById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteAffiliation(@PathVariable Long id) {
        affiliationService.deleteAffiliation(id);
    }
}
