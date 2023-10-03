package com.example.springserve.criteregrade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Criteregrade")
@CrossOrigin(origins = "http://localhost:3000")
public class CriteregradeController 
{
    @Autowired
    private CriteregradeService criteregradeService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Criteregrade> getAllCriteregrade() {
        return criteregradeService.getAllCriteregrades();
    }

    @PostMapping("/save")
    public Criteregrade saveCriteregrade(@RequestBody Criteregrade criteregrade) {
        return criteregradeService.saveCriteregrade(criteregrade);
    }

    @GetMapping("/getById/{id}")
    public Criteregrade getCriteregradeById(@PathVariable Long id) {
        return OptionalGet.get(criteregradeService.getCriteregradeById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteCriteregrade(@PathVariable Long id) {
        criteregradeService.deleteCriteregrade(id);
    }
}
