package com.example.springserve.affiliation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AffiliationService {

    @Autowired(required = false)
    private AffiliationRepository affiliationRepository;

    public List<Affiliation> getAllAffiliations() {
        return affiliationRepository.findAll();
    }

    public Affiliation saveAffiliation(Affiliation affiliation) {
        return affiliationRepository.save(affiliation);
    }

    public Optional<Affiliation> getAffiliationById(Long id) {
        Optional<Affiliation> res = affiliationRepository.findById(id);
        return res;
    }

    public void deleteAffiliation(Long id) {
        affiliationRepository.deleteById(id);
    }
}
