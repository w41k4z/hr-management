package com.example.springserve.besoinservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BesoinserviceService {

    @Autowired(required = false)
    private BesoinserviceRepository besoinserviceRepository;

    public List<Besoinservice> getAllBesoinservices() {
        return besoinserviceRepository.findAll();
    }

    public Besoinservice saveBesoinservice(Besoinservice besoinservice) {
        return besoinserviceRepository.save(besoinservice);
    }

    public Optional<Besoinservice> getBesoinserviceById(Long id) {
        Optional<Besoinservice> res = besoinserviceRepository.findById(id);
        return res;
    }

    public void deleteBesoinservice(Long id) {
        besoinserviceRepository.deleteById(id);
    }
}
