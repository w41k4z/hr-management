package com.example.springserve.finconge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class FincongeService {

    @Autowired(required = false)
    private FincongeRepository fincongeRepository;

    public List<Finconge> getAllFinconges() {
        return fincongeRepository.findAll();
    }

    public Finconge saveFinconge(Finconge finconge) {
        return fincongeRepository.save(finconge);
    }

    public Optional<Finconge> getFincongeById(Long id) {
        Optional<Finconge> res = fincongeRepository.findById(id);
        return res;
    }

    public void deleteFinconge(Long id) {
        fincongeRepository.deleteById(id);
    }
}
