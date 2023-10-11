package com.example.springserve.fichedeposte;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Fichedeposte")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class FichedeposteController {
    @Autowired
    private FichedeposteService fichedeposteService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Fichedeposte> getAllFichedeposte() {
        return fichedeposteService.getAllFichedepostes();
    }

    @PostMapping("/save")
    public Fichedeposte saveFichedeposte(@RequestBody Fichedeposte fichedeposte) {
        return fichedeposteService.saveFichedeposte(fichedeposte);
    }

    @GetMapping("/getById/{id}")
    public Fichedeposte getFichedeposteById(@PathVariable Long id) {
        return OptionalGet.get(fichedeposteService.getFichedeposteById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteFichedeposte(@PathVariable Long id) {
        fichedeposteService.deleteFichedeposte(id);
    }
}
