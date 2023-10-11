package com.example.springserve.personnel;

import java.sql.Date;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personnel")
public class Personnel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idposte")
    public Long idposte;

    @Column(name = "idservice")
    public Long idservice;

    @Column(name = "nom")
    public String nom;

    @Column(name = "prenom")
    public String prenom;

    @Column(name = "dtn")
    public Date dtn;

    @Column(name = "dtembauche")
    public Date dtembauche;

    @Column(name = "idfonction")
    public Long idfonction;    

}
