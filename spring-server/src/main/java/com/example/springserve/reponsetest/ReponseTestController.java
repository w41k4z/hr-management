package com.example.springserve.reponsetest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/ReponseTest")
@CrossOrigin("http://localhost:3000")
public class ReponseTestController 
{
    @Autowired
    private ReponseTestService reponseTestService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<ReponseTest> getAllReponseTest() {
        return reponseTestService.getAllReponseTests();
    }

    @PostMapping("/save")
    public ReponseTest saveReponseTest(@RequestBody ReponseTest questionannonce) {
        return reponseTestService.saveReponseTest(questionannonce);
    }

    @GetMapping("/getById/{id}")
    public ReponseTest getReponseTestById(@PathVariable Long id) {
        return OptionalGet.get(reponseTestService.getReponseTestById(id));
    }
}
