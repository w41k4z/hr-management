package com.example.springserve.questionreponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class QuestionreponseService {

    @Autowired(required = false)
    private QuestionreponseRepository questionreponseRepository;

    public List<Questionreponse> getAllQuestionreponses() {
        return questionreponseRepository.findAll();
    }

    public Questionreponse saveQuestionreponse(Questionreponse questionreponse) {
        return questionreponseRepository.save(questionreponse);
    }

    public Optional<Questionreponse> getQuestionreponseById(Long id) {
        Optional<Questionreponse> res = questionreponseRepository.findById(id);
        return res;
    }

    public void deleteQuestionreponse(Long id) {
        questionreponseRepository.deleteById(id);
    }
}
