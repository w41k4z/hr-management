package com.example.springserve.cvgrade;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CvgradeRepository extends JpaRepository<Cvgrade , Long>
{
    Optional<Cvgrade> findById(Long id);
}