package com.example.springserve.cvexperience;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Cvexperience")
public class CvexperienceController 
{
    @Autowired
    private CvexperienceService cvexperienceService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Cvexperience> getAllCvexperience() {
        return cvexperienceService.getAllCvexperiences();
    }

    @PostMapping("/save")
    public Cvexperience saveCv(@RequestBody Cvexperience cvexperience) {
        return cvexperienceService.saveCvexperience(cvexperience);
    }

    @GetMapping("/getById/{id}")
    public Cvexperience getCvexperienceById(@PathVariable Long id) {
        return OptionalGet.get(cvexperienceService.getCvexperienceById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteCvexperience(@PathVariable Long id) {
        cvexperienceService.deleteCvexperience(id);
    }
}
