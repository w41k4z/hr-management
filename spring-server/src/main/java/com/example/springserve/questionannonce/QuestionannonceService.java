package com.example.springserve.questionannonce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springserve.question.Question;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import java.util.List;
import java.util.Optional;


@Service
public class QuestionannonceService {

    @Autowired(required = false)
    private QuestionannonceRepository questionannonceRepository;

    @PersistenceContext
    private EntityManager em;

    public List<Questionannonce> getAllQuestionannonces() {
        return questionannonceRepository.findAll();
    }

    public Questionannonce saveQuestionannonce(Questionannonce questionannonce) {
        return questionannonceRepository.save(questionannonce);
    }

    public Optional<Questionannonce> getQuestionannonceById(Long id) {
        Optional<Questionannonce> res = questionannonceRepository.findById(id);
        return res;
    }

    public void deleteQuestionannonce(Long id) {
        questionannonceRepository.deleteById(id);
    }

    public List<Question> getQuestionsByIdAnnonce(Long idAnnonce) {

        StringBuilder subQuery = new StringBuilder(
            "SELECT date_question_annonce FROM Questionannonce" +
            " WHERE idannonce = :idAnnonce " + 
            " ORDER BY date_question_annonce DESC LIMIT 1 "
        );
        StringBuilder questionOfAnnonce = new StringBuilder(
            "SELECT Q FROM Questionannonce QA" +
                " JOIN Question Q ON Q.id=QA.idquestion " +
                " WHERE idannonce = :idAnnonce " +
                " AND date_question_annonce = (" + subQuery + ")");
        String request = questionOfAnnonce.toString();

        TypedQuery<Question> query = em.createQuery(request, Question.class);
        query.setParameter("idAnnonce", idAnnonce);

        List<Question> result = query.getResultList();
        return result;
    }
}
