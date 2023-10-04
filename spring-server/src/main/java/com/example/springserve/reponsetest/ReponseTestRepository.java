package com.example.springserve.reponsetest;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReponseTestRepository extends JpaRepository<ReponseTest , Long>
{
    Optional<ReponseTest> findById(Long id);
}