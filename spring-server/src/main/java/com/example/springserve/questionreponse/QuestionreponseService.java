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

    public Optional<Questionreponse> getQuestionreponseById(Long idQuestion) {
        Optional<Questionreponse> res = questionreponseRepository.findById(idQuestion);
        return res;
    }

    public void deleteQuestionreponse(Long id) {
        questionreponseRepository.deleteById(id);
    }

    public List<Questionreponse> getQuestionreponseByIdQuestion(Long idQuestion) {
        return questionreponseRepository.findByQuestion_Id(idQuestion);
    }
}
