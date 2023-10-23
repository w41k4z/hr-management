package com.example.springserve.v_conge.v_terminerconge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class V_terminercongeService {

    @Autowired(required = false)
    private V_terminercongeRepository terminercongeViewRepository;

    public List<V_terminerconge> getAll() {
        return terminercongeViewRepository.findAll();
    }

    public List<V_terminerconge> getAllByEtat(Long etat) {
        return terminercongeViewRepository.findByEtat(etat);
    }

}
