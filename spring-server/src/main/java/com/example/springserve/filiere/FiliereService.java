package com.example.springserve.filiere;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class FiliereService {

    @Autowired(required = false)
    private FiliereRepository filiereRepository;

    public List<Filiere> getAllFilieres() {
        return filiereRepository.findAll();
    }

    public Filiere saveFiliere(Filiere filiere) {
        return filiereRepository.save(filiere);
    }

    public Optional<Filiere> getFiliereById(Long id) {
        Optional<Filiere> res = filiereRepository.findById(id);
        return res;
    }

    public void deleteFiliere(Long id) {
        filiereRepository.deleteById(id);
    }
}
