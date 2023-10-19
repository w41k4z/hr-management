package com.example.springserve.fonction;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FonctionRepository extends JpaRepository<Fonction , Long>
{
    Optional<Fonction> findById(Long id);
}