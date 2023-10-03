package com.example.springserve.filiere;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Filiere")
@CrossOrigin(origins = "http://localhost:3000")
public class FiliereController 
{
    @Autowired
    private FiliereService filiereService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Filiere> getAllFiliere() {
        return filiereService.getAllFilieres();
    }

    @PostMapping("/save")
    public Filiere saveFiliere(@RequestBody Filiere filiere) {
        return filiereService.saveFiliere(filiere);
    }

    @GetMapping("/getById/{id}")
    public Filiere getFiliereById(@PathVariable Long id) {
        return OptionalGet.get(filiereService.getFiliereById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteFiliere(@PathVariable Long id) {
        filiereService.deleteFiliere(id);
    }
}
