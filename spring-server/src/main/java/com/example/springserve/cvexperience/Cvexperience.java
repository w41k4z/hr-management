package com.example.springserve.cvexperience;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cvexperience")
public class Cvexperience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idcv")
    public Long idcv;
    @Column(name = "description")
    public String description;
    @Column(name = "lienpreuveexperience")
    public String lienpreuveexperience;


}
