package com.example.springserve.filiere;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FiliereRepository extends JpaRepository<Filiere , Long>
{
    Optional<Filiere> findById(Long id);
}