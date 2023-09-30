package com.example.springserve.besoinservice;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BesoinserviceRepository extends JpaRepository<Besoinservice , Long>
{
    Optional<Besoinservice> findById(Long id);
}