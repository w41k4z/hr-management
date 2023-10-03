package com.example.springserve.critereselection;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "critereselection")
public class Critereselection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idbesoin")
    public Long idbesoin;

    @Column(name = "experience")
    public String experience;

    @Column(name = "sm")
    public String sm;

    @Column(name = "sexe")
    public String sexe;


}
