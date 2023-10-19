package com.example.springserve.fonction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class FonctionService {

    @Autowired(required = false)
    private FonctionRepository fonctionRepository;

    public List<Fonction> getAllFonctions() {
        return fonctionRepository.findAll();
    }

    public Fonction saveFonction(Fonction Fonction) {
        return fonctionRepository.save(Fonction);
    }

    public Optional<Fonction> getFonctionById(Long id) {
        Optional<Fonction> res = fonctionRepository.findById(id);
        return res;
    }

    public void deleteFonction(Long id) {
        fonctionRepository.deleteById(id);
    }
}
