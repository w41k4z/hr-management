package com.example.springserve.personnel;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonnelRepository extends JpaRepository<Personnel , Long>
{
    Optional<Personnel> findById(Long id);
}