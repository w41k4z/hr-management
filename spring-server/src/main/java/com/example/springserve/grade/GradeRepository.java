package com.example.springserve.grade;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends JpaRepository<Grade , Long>
{
    Optional<Grade> findById(Long id);
}