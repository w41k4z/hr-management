package com.example.springserve.criteregrade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CriteregradeService {

    @Autowired(required = false)
    private CriteregradeRepository criteregradeRepository;

    public List<Criteregrade> getAllCriteregrades() {
        return criteregradeRepository.findAll();
    }

    public Criteregrade saveCriteregrade(Criteregrade criteregrade) {
        return criteregradeRepository.save(criteregrade);
    }

    public Optional<Criteregrade> getCriteregradeById(Long id) {
        Optional<Criteregrade> res = criteregradeRepository.findById(id);
        return res;
    }

    public void deleteCriteregrade(Long id) {
        criteregradeRepository.deleteById(id);
    }
}
