package com.example.springserve.annonce;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce , Long>
{
    Optional<Annonce> findById(Long id);
}