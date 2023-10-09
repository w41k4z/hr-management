package com.example.springserve.posteservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Posteservice")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class PosteserviceController {
    @Autowired
    private PosteserviceService posteserviceService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Posteservice> getAllPosteservice() {
        return posteserviceService.getAllPosteservices();
    }

    @PostMapping("/save")
    public Posteservice savePosteservice(@RequestBody Posteservice posteservice) {
        return posteserviceService.savePosteservice(posteservice);
    }

    @GetMapping("/getById/{id}")
    public Posteservice getPosteserviceById(@PathVariable Long id) {
        return OptionalGet.get(posteserviceService.getPosteserviceById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deletePosteservice(@PathVariable Long id) {
        posteserviceService.deletePosteservice(id);
    }
}
