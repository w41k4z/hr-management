package com.example.springserve.questionreponse;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionreponseRepository extends JpaRepository<Questionreponse , Long>
{
    Optional<Questionreponse> findById(Long id);
}