package com.example.springserve.cvexperience;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CvexperienceService {

    @Autowired(required = false)
    private CvexperienceRepository cvexperienceRepository;

    public List<Cvexperience> getAllCvexperiences() {
        return cvexperienceRepository.findAll();
    }

    public Cvexperience saveCvexperience(Cvexperience cvexperience) {
        return cvexperienceRepository.save(cvexperience);
    }

    public Optional<Cvexperience> getCvexperienceById(Long id) {
        Optional<Cvexperience> res = cvexperienceRepository.findById(id);
        return res;
    }

    public void deleteCvexperience(Long id) {
        cvexperienceRepository.deleteById(id);
    }
}
