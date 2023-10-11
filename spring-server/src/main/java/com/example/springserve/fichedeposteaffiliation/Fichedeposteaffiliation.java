package com.example.springserve.fichedeposteaffiliation;

import java.sql.Date;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fichedeposteaffiliation")
public class Fichedeposteaffiliation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idfichedeposte")
    public Long idfichedeposte;

    @Column(name = "idaffiliation")
    public Long idaffiliation;


}
