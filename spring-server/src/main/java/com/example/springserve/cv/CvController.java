package com.example.springserve.cv;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Cv")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class CvController {
    @Autowired
    private CvService cvService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Cv> getAllCv() {
        return cvService.getAllCvs();
    }

    @GetMapping("/getAllNotedCvByAnnonceId/{idAnnonce}")
    public List<NotedCv> getAllNotedCvByAnnonceId(@PathVariable Long idAnnonce) {
        return cvService.getAllNotedCvByAnnonceId(idAnnonce);
    }

    @PostMapping("/save")
    public Cv saveCv(@RequestBody Cv cv) {
        return cvService.saveCv(cv);
    }

    @GetMapping("/getById/{id}")
    public Cv getCvById(@PathVariable Long id) {
        return OptionalGet.get(cvService.getCvById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteCv(@PathVariable Long id) {
        cvService.deleteCv(id);
    }
}
