package com.example.springserve.heuresupp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HeureSuppService {

    @Autowired(required = false)
    private HeureSuppRepository heureSuppRepository;

    public List<HeureSupp> getAllHeureSupp() {
        return heureSuppRepository.findAll();
    }

    public HeureSupp saveHeureSupp(HeureSupp hs) {
        return heureSuppRepository.save(hs);
    }

    public Optional<HeureSupp> getHeureSuppById(Long id) {
        Optional<HeureSupp> res = heureSuppRepository.findById(id);
        return res;
    }

    public void deleteHeureSupp(Long id) {
        heureSuppRepository.deleteById(id);
    }

    public HeureSupp getHeureSuppByIdPersonnel(Long idPersonnel){
        return heureSuppRepository.getHeureSuppByIdPersonnel(idPersonnel);
    }
}
