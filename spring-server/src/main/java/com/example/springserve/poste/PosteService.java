package com.example.springserve.poste;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PosteService {

    @Autowired(required = false)
    private PosteRepository posteRepository;

    public List<Poste> getAllPostes() {
        return posteRepository.findAll();
    }

    public Poste savePoste(Poste poste) {
        return posteRepository.save(poste);
    }


    public Poste updatePoste(Poste poste) {
        return posteRepository.save(poste);
    }

    public Optional<Poste> getPosteById(Long id) {
        Optional<Poste> res = posteRepository.findById(id);
        return res;
    }

    public void deletePoste(Long id) {
        posteRepository.deleteById(id);
    }
}
