package com.example.springserve.v_conge.v_prendreconge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class V_prendrecongeService {

    @Autowired(required = false)
    private V_prendrecongeRepository prendrecongeViewRepository;

    public List<V_prendreconge> getAll() {
        return prendrecongeViewRepository.findAll();
    }
}
