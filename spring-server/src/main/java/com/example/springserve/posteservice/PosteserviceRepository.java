package com.example.springserve.posteservice;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PosteserviceRepository extends JpaRepository<Posteservice , Long>
{
    Optional<Posteservice> findById(Long id);
}