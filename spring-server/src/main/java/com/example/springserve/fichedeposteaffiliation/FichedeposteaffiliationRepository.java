package com.example.springserve.fichedeposteaffiliation;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FichedeposteaffiliationRepository extends JpaRepository<Fichedeposteaffiliation , Long>
{
    Optional<Fichedeposteaffiliation> findById(Long id);
}