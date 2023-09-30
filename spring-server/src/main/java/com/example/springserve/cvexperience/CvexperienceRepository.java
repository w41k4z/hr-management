package com.example.springserve.cvexperience;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CvexperienceRepository extends JpaRepository<Cvexperience , Long>
{
    Optional<Cvexperience> findById(Long id);
}