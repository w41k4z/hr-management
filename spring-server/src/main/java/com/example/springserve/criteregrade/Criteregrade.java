package com.example.springserve.criteregrade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "criteregrade")
public class Criteregrade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idcritereselection")
    public Long idcritereselection;

    @Column(name = "idfiliere")
    public Long idfiliaire;

    @Column(name = "idgrade")
    public Long idgrade;

    @Column(name = "coeff")
    public Double coeff;


}
