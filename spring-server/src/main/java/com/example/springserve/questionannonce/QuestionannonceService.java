package com.example.springserve.questionannonce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class QuestionannonceService {

    @Autowired(required = false)
    private QuestionannonceRepository questionannonceRepository;

    public List<Questionannonce> getAllQuestionannonces() {
        return questionannonceRepository.findAll();
    }

    public Questionannonce saveQuestionannonce(Questionannonce questionannonce) {
        return questionannonceRepository.save(questionannonce);
    }

    public Optional<Questionannonce> getQuestionannonceById(Long id) {
        Optional<Questionannonce> res = questionannonceRepository.findById(id);
        return res;
    }

    public void deleteQuestionannonce(Long id) {
        questionannonceRepository.deleteById(id);
    }
}
