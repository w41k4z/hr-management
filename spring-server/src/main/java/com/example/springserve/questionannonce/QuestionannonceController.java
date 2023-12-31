package com.example.springserve.questionannonce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.question.Question;

@RestController
@RequestMapping("/Questionannonce")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class QuestionannonceController {
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

    @GetMapping("/getQuestionsByIdAnnonce/{idAnnonce}")
    public List<Question> getQuestionsByIdAnnonce(@PathVariable Long idAnnonce) {
        return questionannonceService.getQuestionsByIdAnnonce(idAnnonce);
    }
}
