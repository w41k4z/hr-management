package com.example.springserve.poste;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PosteRepository extends JpaRepository<Poste , Long>
{
    Optional<Poste> findById(Long id);
}