package com.example.springserve.annonce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Annonce")
@CrossOrigin(origins = "http://localhost:3000")
public class AnnonceController 
{
    @Autowired
    private AnnonceService annonceService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Annonce> getAllAnnonce() {
        return annonceService.getAllAnnonces();
    }

    @PostMapping("/save")
    public Annonce saveAnnonce(@RequestBody Annonce annonce) {
        return annonceService.saveAnnonce(annonce);
    }

    @GetMapping("/getById/{id}")
    public Annonce getAnnonceById(@PathVariable Long id) {
        return OptionalGet.get(annonceService.getAnnonceById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteAnnonce(@PathVariable Long id) {
        annonceService.deleteAnnonce(id);
    }
}
