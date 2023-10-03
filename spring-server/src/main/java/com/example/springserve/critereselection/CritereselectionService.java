package com.example.springserve.critereselection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CritereselectionService {

    @Autowired(required = false)
    private CritereselectionRepository critereselectionRepository;

    public List<Critereselection> getAllCritereselections() {
        return critereselectionRepository.findAll();
    }

    public Critereselection saveCritereselection(Critereselection critereselection) {
        return critereselectionRepository.save(critereselection);
    }

    public Optional<Critereselection> getCritereselectionById(Long id) {
        Optional<Critereselection> res = critereselectionRepository.findById(id);
        return res;
    }

    public void deleteCritereselection(Long id) {
        critereselectionRepository.deleteById(id);
    }
}
