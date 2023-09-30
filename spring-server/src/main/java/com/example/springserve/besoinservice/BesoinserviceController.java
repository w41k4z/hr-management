package com.example.springserve.besoinservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Besoinservice")
public class BesoinserviceController 
{
    @Autowired
    private BesoinserviceService besoinserviceService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Besoinservice> getAllBesoinservice() {
        return besoinserviceService.getAllBesoinservices();
    }

    @PostMapping("/save")
    public Besoinservice saveBesoinservice(@RequestBody Besoinservice besoinservice) {
        return besoinserviceService.saveBesoinservice(besoinservice);
    }

    @GetMapping("/getById/{id}")
    public Besoinservice getBesoinserviceById(@PathVariable Long id) {
        return OptionalGet.get(besoinserviceService.getBesoinserviceById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteBesoinservice(@PathVariable Long id) {
        besoinserviceService.deleteBesoinservice(id);
    }
}
