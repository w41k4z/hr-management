package com.example.springserve.annonce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AnnonceService {

    @Autowired(required = false)
    private AnnonceRepository annonceRepository;

    public List<Annonce> getAllAnnonces() {
        return annonceRepository.findAll();
    }

    public Annonce saveAnnonce(Annonce annonce) {
        return annonceRepository.save(annonce);
    }

    public Optional<Annonce> getAnnonceById(Long id) {
        Optional<Annonce> res = annonceRepository.findById(id);
        return res;
    }

    public void deleteAnnonce(Long id) {
        annonceRepository.deleteById(id);
    }
}
