package com.example.springserve.fonction;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Fonction")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class FonctionController {
    @Autowired
    private FonctionService fonctionService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Fonction> getAllFonction() {
        return fonctionService.getAllFonctions();
    }

    @PostMapping("/save")
    public Fonction saveFonction(@RequestBody Fonction fonction) {
        return fonctionService.saveFonction(fonction);
    }

    @GetMapping("/getById/{id}")
    public Fonction getFonctionById(@PathVariable Long id) {
        return OptionalGet.get(fonctionService.getFonctionById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteFonction(@PathVariable Long id) {
        fonctionService.deleteFonction(id);
    }
}
