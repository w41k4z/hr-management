package com.example.springserve.v_conge.v_congerestant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class V_congerestantService {

    @Autowired(required = false)
    private V_congerestantRepository congerestantViewRepository;

    public List<V_congerestant> getAll() {
        return congerestantViewRepository.findAll();
    }

}
