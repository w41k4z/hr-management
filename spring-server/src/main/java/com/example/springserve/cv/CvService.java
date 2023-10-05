package com.example.springserve.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import java.util.List;
import java.util.Optional;


@Service
public class CvService {

    @Autowired(required = false)
    private CvRepository cvRepository;

    @Autowired
    private EntityManager em;

    public List<Cv> getAllCvs() {
        return cvRepository.findAll();
    }

    public Cv saveCv(Cv cv) {
        return cvRepository.save(cv);
    }

    public Optional<Cv> getCvById(Long id) {
        Optional<Cv> res = cvRepository.findById(id);
        return res;
    }

    public void deleteCv(Long id) {
        cvRepository.deleteById(id);
    }

    public List<Cv> getAllCvByAnnonceId(Long idAnnonce) {
        StringBuilder idCvs = new StringBuilder(
            "SELECT idcv FROM ReponseTest " + 
            " WHERE idannonce = :idAnnonce ");
        String subQuery = idCvs.toString();

        StringBuilder listCv = new StringBuilder(
            "SELECT cv FROM Cv cv" +
                " WHERE cv.id IN (" + subQuery + ")");
        subQuery = listCv.toString();
        
        Query query = em.createQuery(subQuery);
        query.setParameter("idAnnonce", idAnnonce);

        List<Cv> result = query.getResultList();
        return result;
    }
}
