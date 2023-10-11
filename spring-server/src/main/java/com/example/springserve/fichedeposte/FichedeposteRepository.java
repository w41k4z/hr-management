package com.example.springserve.fichedeposte;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FichedeposteRepository extends JpaRepository<Fichedeposte , Long>
{
    Optional<Fichedeposte> findById(Long id);
}