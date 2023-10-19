package com.example.springserve.finconge;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FincongeRepository extends JpaRepository<Finconge , Long>
{
    Optional<Finconge> findById(Long id);
}