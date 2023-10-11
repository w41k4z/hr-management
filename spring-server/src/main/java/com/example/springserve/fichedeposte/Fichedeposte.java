package com.example.springserve.fichedeposte;

import java.sql.Date;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fichedeposte")
public class Fichedeposte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idcv")
    public Long idcv;

    @Column(name = "contrat")
    public String contrat;

    @Column(name = "pathcontrat")
    public String pathcontrat;

    @Column(name = "responsabilite")
    public String responsabilite;

    @Column(name = "mission")
    public String mission;

    @Column(name = "idsuperieur")
    public Long idsuperieur;    

    @Column(name = "matricule")
    public String matricule;

}
