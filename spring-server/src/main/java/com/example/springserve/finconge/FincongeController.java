package com.example.springserve.finconge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Finconge")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class FincongeController {
    @Autowired
    private FincongeService fincongeService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Finconge> getAllFinconge() {
        return fincongeService.getAllFinconges();
    }

    @PostMapping("/save")
    public Finconge saveFinconge(@RequestBody Finconge finconge) {
        return fincongeService.saveFinconge(finconge);
    }

    @GetMapping("/getById/{id}")
    public Finconge getFincongeById(@PathVariable Long id) {
        return OptionalGet.get(fincongeService.getFincongeById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteFinconge(@PathVariable Long id) {
        fincongeService.deleteFinconge(id);
    }
}
