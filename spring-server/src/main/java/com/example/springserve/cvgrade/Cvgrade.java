package com.example.springserve.cvgrade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cvgrade")
public class Cvgrade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idcv")
    public Long idcv;
    @Column(name = "idfiliere")
    public Long idfiliere;
    @Column(name = "idgrade")
    public Long idgrade;
    @Column(name = "lienpreuvegrade")
    public String lienpreuvegrade;


}
