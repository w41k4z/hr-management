package com.example.springserve.reponsetest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;
import java.util.Optional;


@Service
public class ReponseTestService {

    @Autowired(required = false)
    private ReponseTestRepository reponseTestRepository;

    @PersistenceContext
    private EntityManager em;

    public List<ReponseTest> getAllReponseTests() {
        return reponseTestRepository.findAll();
    }

    public ReponseTest saveReponseTest(ReponseTest questionannonce) {
        return reponseTestRepository.save(questionannonce);
    }

    public Optional<ReponseTest> getReponseTestById(Long id) {
        Optional<ReponseTest> res = reponseTestRepository.findById(id);
        return res;
    }

    public void deleteReponseTest(Long id) {
        reponseTestRepository.deleteById(id);
    }
}
