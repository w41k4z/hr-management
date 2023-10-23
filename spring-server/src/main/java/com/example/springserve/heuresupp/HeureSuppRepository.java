package com.example.springserve.heuresupp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HeureSuppRepository extends JpaRepository<HeureSupp, Long> {
    public HeureSupp findByIdPersonnelAndIdTypeHS(Long IdPersonnel, Long IdTypeHS);
}
