package com.example.springserve.questionannonce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Questionannonce")
@CrossOrigin("http://localhost:3000")
public class QuestionannonceController 
{
    @Autowired
    private QuestionannonceService questionannonceService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Questionannonce> getAllQuestionannonce() {
        return questionannonceService.getAllQuestionannonces();
    }

    @PostMapping("/save")
    public Questionannonce saveQuestionannonce(@RequestBody Questionannonce questionannonce) {
        return questionannonceService.saveQuestionannonce(questionannonce);
    }

    @GetMapping("/getById/{id}")
    public Questionannonce getQuestionannonceById(@PathVariable Long id) {
        return OptionalGet.get(questionannonceService.getQuestionannonceById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteQuestionannonce(@PathVariable Long id) {
        questionannonceService.deleteQuestionannonce(id);
    }
}
