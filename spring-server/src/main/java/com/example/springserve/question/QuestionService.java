package com.example.springserve.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import java.util.List;
import java.util.Optional;


@Service
public class QuestionService {

    @Autowired(required = false)
    private QuestionRepository questionRepository;

    @PersistenceContext
    private EntityManager em;

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Optional<Question> getQuestionById(Long id) {
        Optional<Question> res = questionRepository.findById(id);
        return res;
    }

    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }

    public List<Question> getQuestionsByPosteId(Long idPoste) {
        StringBuilder lastBesoinService = new StringBuilder(
            "SELECT id FROM Besoinservice" +
                " WHERE idposte = :idPoste " +
                " ORDER BY datebesoinservice DESC LIMIT 1");
        String subQuery = lastBesoinService.toString();

        StringBuilder annonce_correspondant = new StringBuilder(
            "SELECT id FROM Annonce" +
                " WHERE id= (" + subQuery + ")");
        subQuery = annonce_correspondant.toString();

        StringBuilder correpondant_question = new StringBuilder(
            "SELECT Q FROM Questionannonce QA" +
            " JOIN Question Q ON Q.id=QA.idquestion " + 
            " WHERE idannonce = (" + subQuery + ") ");
        subQuery = correpondant_question.toString();
        
        TypedQuery<Question> query = em.createQuery(subQuery, Question.class);
        query.setParameter("idPoste", idPoste);

        List<Question> result = query.getResultList();
        return result;
    }
}
