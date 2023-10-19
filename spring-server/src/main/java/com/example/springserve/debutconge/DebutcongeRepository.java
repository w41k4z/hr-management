package com.example.springserve.debutconge;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DebutcongeRepository extends JpaRepository<Debutconge , Long>
{
    Optional<Debutconge> findById(Long id);
}