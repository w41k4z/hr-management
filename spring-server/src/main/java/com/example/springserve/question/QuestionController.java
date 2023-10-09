package com.example.springserve.question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Question")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Question> getAllQuestion() {
        return questionService.getAllQuestions();
    }

    @PostMapping("/save")
    public Question saveQuestion(@RequestBody Question question) {
        return questionService.saveQuestion(question);
    }

    @GetMapping("/getById/{id}")
    public Question getQuestionById(@PathVariable Long id) {
        return OptionalGet.get(questionService.getQuestionById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    @ResponseBody
    public void deleteQuestion(@PathVariable Long id) {
        questionService.deleteQuestion(id);
    }

    @GetMapping("/getLastQuestionByPostId/{idposte}")
    @ResponseBody
    public List<Question> getLastQuestionByPostId(@PathVariable Long idposte) {
        return questionService.getQuestionsByPosteId(idposte);
    }
}
