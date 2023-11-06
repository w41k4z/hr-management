package com.example.springserve.heuresupp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/HeureSupp")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class HeureSuppController {

    @Autowired
    private HeureSuppService heureSuppService;

    @GetMapping("/getAll")
    public List<HeureSupp> getAllHeureSupp() {
        return heureSuppService.getAllHeureSupp();
    }

    @PostMapping("/save")
    public HeureSupp saveHeureSupp(@RequestBody HeureSupp heureSupp) {
        return heureSuppService.saveHeureSupp(heureSupp);
    }

    @GetMapping("/getById/{id}")
    public HeureSupp getHeureSuppById(@PathVariable Long id) {
        return OptionalGet.get(heureSuppService.getHeureSuppById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteHeureSupp(@PathVariable Long id) {
        heureSuppService.deleteHeureSupp(id);
    }
}
