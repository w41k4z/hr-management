package com.example.springserve.debutconge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DebutcongeService {

    @Autowired(required = false)
    private DebutcongeRepository debutcongeRepository;

    public List<Debutconge> getAllDebutconges() {
        return debutcongeRepository.findAll();
    }

    public Debutconge saveDebutconge(Debutconge debutconge) {
        return debutcongeRepository.save(debutconge);
    }

    public Optional<Debutconge> getDebutcongeById(Long id) {
        Optional<Debutconge> res = debutcongeRepository.findById(id);
        return res;
    }

    public void deleteDebutconge(Long id) {
        debutcongeRepository.deleteById(id);
    }
}
