package com.example.springserve.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class QuestionService {

    @Autowired(required = false)
    private QuestionRepository questionRepository;

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Optional<Question> getQuestionById(Long id) {
        Optional<Question> res = questionRepository.findById(id);
        return res;
    }

    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }
}
