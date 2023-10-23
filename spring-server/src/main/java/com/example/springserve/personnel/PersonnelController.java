package com.example.springserve.personnel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Personnel")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class PersonnelController {

    @Autowired
    private PersonnelService personnelService;

    @GetMapping("/getAll")
    public List<Personnel> getAllPersonnel() {
        return personnelService.getAllPersonnels();
    }

    @PostMapping("/save")
    public Personnel savePersonnel(@RequestBody Personnel personnel) {
        return personnelService.savePersonnel(personnel);
    }

    @GetMapping("/getById/{id}")
    public Personnel getPersonnelById(@PathVariable Long id) {
        Personnel personnel =  OptionalGet.get(personnelService.getPersonnelById(id));
        personnel.setSeniority();
        return personnel;
    }

    @DeleteMapping("/deleteById/{id}")
    public void deletePersonnel(@PathVariable Long id) {
        personnelService.deletePersonnel(id);
    }
}
