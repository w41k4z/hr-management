package com.example.springserve.v_personnel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class V_personnelService {

    @Autowired(required = false)
    private V_personnelRepository personnelViewRepository;

    public List<V_personnel> getAll() {
        return personnelViewRepository.findAll();
    }

    public V_personnel savePersonnelView(V_personnel region) {
        return personnelViewRepository.save(region);
    }

    public Optional<V_personnel> getPersonnelViewById(Long id) {
        Optional<V_personnel> res = personnelViewRepository.findById(id);
        return res;
    }

    public void deletePersonnelView(Long id) {
        personnelViewRepository.deleteById(id);
    }
}
