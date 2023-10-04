package com.example.springserve.questionreponse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Questionreponse")
@CrossOrigin("http://localhost:3000")
public class QuestionreponseController 
{
    @Autowired
    private QuestionreponseService questionreponseService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Questionreponse> getAllQuestionreponse() {
        return questionreponseService.getAllQuestionreponses();
    }

    @PostMapping("/save")
    public Questionreponse saveQuestionreponse(@RequestBody Questionreponse questionreponse) {
        return questionreponseService.saveQuestionreponse(questionreponse);
    }

    @GetMapping("/getById/{id}")
    public Questionreponse getQuestionreponseById(@PathVariable Long id) {
        return OptionalGet.get(questionreponseService.getQuestionreponseById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteQuestionreponse(@PathVariable Long id) {
        questionreponseService.deleteQuestionreponse(id);
    }

    @GetMapping("/getByIdQuestion/{idQuestion}")
    public List<Questionreponse> getQuestionreponseByIdQuestion(@PathVariable Long idQuestion) {
        return questionreponseService.getQuestionreponseByIdQuestion(idQuestion);
    }
}
