package com.example.springserve.fichedeposteaffiliation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class FichedeposteaffiliationService {

    @Autowired(required = false)
    private FichedeposteaffiliationRepository fichedeposteaffiliationRepository;

    public List<Fichedeposteaffiliation> getAllFichedeposteaffiliations() {
        return fichedeposteaffiliationRepository.findAll();
    }

    public Fichedeposteaffiliation saveFichedeposteaffiliation(Fichedeposteaffiliation fichedeposteaffiliation) {
        return fichedeposteaffiliationRepository.save(fichedeposteaffiliation);
    }

    public Optional<Fichedeposteaffiliation> getFichedeposteaffiliationById(Long id) {
        Optional<Fichedeposteaffiliation> res = fichedeposteaffiliationRepository.findById(id);
        return res;
    }

    public void deleteFichedeposteaffiliation(Long id) {
        fichedeposteaffiliationRepository.deleteById(id);
    }
}
