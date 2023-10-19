package com.example.springserve.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class V_besoinannonceService {

    @Autowired(required = false)
    private V_besoinannonceRepository besoinAnnonceViewRepository;

    public List<V_besoinannonce> getAllV_besoinannonces() {
        return besoinAnnonceViewRepository.findAll();
    }

    public V_besoinannonce saveBesoinAnnonceView(V_besoinannonce region) {
        return besoinAnnonceViewRepository.save(region);
    }

    public Optional<V_besoinannonce> getBesoinAnnonceViewById(Long id) {
        Optional<V_besoinannonce> res = besoinAnnonceViewRepository.findById(id);
        return res;
    }

    public void deleteBesoinAnnonceView(Long id) {
        besoinAnnonceViewRepository.deleteById(id);
    }
}
