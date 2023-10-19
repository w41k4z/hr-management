package com.example.springserve.debutconge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Debutconge")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class DebutcongeController {
    @Autowired
    private DebutcongeService debutcongeService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Debutconge> getAllDebutconge() {
        return debutcongeService.getAllDebutconges();
    }

    @PostMapping("/save")
    public Debutconge saveDebutconge(@RequestBody Debutconge debutconge) {
        return debutcongeService.saveDebutconge(debutconge);
    }

    @GetMapping("/getById/{id}")
    public Debutconge getDebutcongeById(@PathVariable Long id) {
        return OptionalGet.get(debutcongeService.getDebutcongeById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteDebutconge(@PathVariable Long id) {
        debutcongeService.deleteDebutconge(id);
    }
}
