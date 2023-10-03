package com.example.springserve.critereselection;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CritereselectionRepository extends JpaRepository<Critereselection , Long>
{
    Optional<Critereselection> findById(Long id);
}