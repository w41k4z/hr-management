package com.example.springserve.questionannonce;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionannonceRepository extends JpaRepository<Questionannonce , Long>
{
    Optional<Questionannonce> findById(Long id);
}