package com.example.springserve.service;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Service_Repository extends JpaRepository<Service_ , Long>
{
    Optional<Service_> findById(Long id);
}