package com.example.springserve.posteservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PosteserviceService {

    @Autowired(required = false)
    private PosteserviceRepository posteserviceRepository;

    public List<Posteservice> getAllPosteservices() {
        return posteserviceRepository.findAll();
    }

    public Posteservice savePosteservice(Posteservice posteservice) {
        return posteserviceRepository.save(posteservice);
    }

    public Optional<Posteservice> getPosteserviceById(Long id) {
        Optional<Posteservice> res = posteserviceRepository.findById(id);
        return res;
    }

    public void deletePosteservice(Long id) {
        posteserviceRepository.deleteById(id);
    }
}
