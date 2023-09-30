package com.example.springserve.criteregrade;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CriteregradeRepository extends JpaRepository<Criteregrade , Long>
{
    Optional<Criteregrade> findById(Long id);
}