package com.example.springserve.fichedeposte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class FichedeposteService {

    @Autowired(required = false)
    private FichedeposteRepository fichedeposteRepository;

    public List<Fichedeposte> getAllFichedepostes() {
        return fichedeposteRepository.findAll();
    }

    public Fichedeposte saveFichedeposte(Fichedeposte fichedeposte) {
        return fichedeposteRepository.save(fichedeposte);
    }

    public Optional<Fichedeposte> getFichedeposteById(Long id) {
        Optional<Fichedeposte> res = fichedeposteRepository.findById(id);
        return res;
    }

    public void deleteFichedeposte(Long id) {
        fichedeposteRepository.deleteById(id);
    }
}
