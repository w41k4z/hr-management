package com.example.springserve.cvgrade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Cvgrade")
public class CvgradeController 
{
    @Autowired
    private CvgradeService cvgradeService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Cvgrade> getAllCvgrade() {
        return cvgradeService.getAllCvgrades();
    }

    @PostMapping("/save")
    public Cvgrade saveCvgrade(@RequestBody Cvgrade cvgrade) {
        return cvgradeService.saveCvgrade(cvgrade);
    }

    @GetMapping("/getById/{id}")
    public Cvgrade getCvgradeById(@PathVariable Long id) {
        return OptionalGet.get(cvgradeService.getCvgradeById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteCvgrade(@PathVariable Long id) {
        cvgradeService.deleteCvgrade(id);
    }
}
