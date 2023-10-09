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

    public List<NotedCv> getAllNotedCvByAnnonceId(Long idAnnonce) {
        // public NotedCv(Long id, String cin, String nom, String prenom, String adresse, String tel, String email,
        // String sm, String sexe, Double idannonce, Double point) 
        String mainQuery = "SELECT NEW com.example.springserve.cv.NotedCv(" +
                                    " cv.id, cv.cin, cv.nom, cv.prenom, cv.adresse, cv.tel, cv.email," +
                                    " cv.sm, cv.sexe, sb.idannonce, sb.point) "+ 
                            " FROM Cv cv" +
                            " JOIN ReponseTest sb ON sb.idcv = cv.id" +
                            " WHERE sb.idannonce = :idAnnonce";

        Query query = em.createQuery(mainQuery);
        query.setParameter("idAnnonce", idAnnonce);

        List<NotedCv> notedCvList = query.getResultList();
        return notedCvList;
    }

}
