package com.example.springserve.critereselection;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Critereselection")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class CritereselectionController {
    @Autowired
    private CritereselectionService critereselectionService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Critereselection> getAllCritereselection() {
        return critereselectionService.getAllCritereselections();
    }

    @PostMapping("/save")
    public Critereselection saveCritereselection(@RequestBody Critereselection critereselection) {
        return critereselectionService.saveCritereselection(critereselection);
    }

    @GetMapping("/getById/{id}")
    public Critereselection getCritereselectionById(@PathVariable Long id) {
        return OptionalGet.get(critereselectionService.getCritereselectionById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteCritereselection(@PathVariable Long id) {
        critereselectionService.deleteCritereselection(id);
    }
}
