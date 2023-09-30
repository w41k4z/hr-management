package com.example.springserve.region;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends JpaRepository<Region , Long>
{
    Optional<Region> findById(Long id);
}