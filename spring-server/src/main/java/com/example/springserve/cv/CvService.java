package com.example.springserve.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CvService {

    @Autowired(required = false)
    private CvRepository cvRepository;

    public List<Cv> getAllCvs() {
        return cvRepository.findAll();
    }

    public Cv saveCv(Cv cv) {
        return cvRepository.save(cv);
    }

    public Optional<Cv> getCvById(Long id) {
        Optional<Cv> res = cvRepository.findById(id);
        return res;
    }

    public void deleteCv(Long id) {
        cvRepository.deleteById(id);
    }
}
