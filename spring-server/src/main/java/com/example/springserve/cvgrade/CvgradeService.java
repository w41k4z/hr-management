package com.example.springserve.cvgrade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CvgradeService {

    @Autowired(required = false)
    private CvgradeRepository cvgradeRepository;

    public List<Cvgrade> getAllCvgrades() {
        return cvgradeRepository.findAll();
    }

    public Cvgrade saveCvgrade(Cvgrade cvgrade) {
        return cvgradeRepository.save(cvgrade);
    }

    public Optional<Cvgrade> getCvgradeById(Long id) {
        Optional<Cvgrade> res = cvgradeRepository.findById(id);
        return res;
    }

    public void deleteCvgrade(Long id) {
        cvgradeRepository.deleteById(id);
    }
}
