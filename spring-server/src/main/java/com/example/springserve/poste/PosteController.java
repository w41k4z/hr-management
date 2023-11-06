package com.example.springserve.poste;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Poste")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class PosteController {
    @Autowired
    private PosteService posteService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Poste> getAllPoste() {
        return posteService.getAllPostes();
    }

    @PostMapping("/save")
    public Poste savePoste(@RequestBody Poste poste) {
        return posteService.savePoste(poste);
    }

    @PostMapping("/update")
    public Poste updatePoste(@RequestBody Poste poste) {
        return posteService.updatePoste(poste);
    }

    @GetMapping("/getById/{id}")
    public Poste getPosteById(@PathVariable Long id) {
        return OptionalGet.get(posteService.getPosteById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deletePoste(@PathVariable Long id) {
        posteService.deletePoste(id);
    }
}
