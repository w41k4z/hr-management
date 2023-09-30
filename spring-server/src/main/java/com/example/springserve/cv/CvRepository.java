package com.example.springserve.cv;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CvRepository extends JpaRepository<Cv , Long>
{
    Optional<Cv> findById(Long id);
}