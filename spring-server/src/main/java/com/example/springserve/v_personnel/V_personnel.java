package com.example.springserve.v_personnel;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "V_personnel")
@Immutable
public class V_personnel {
    
    @Id
    @Column(name = "id")
    public Long id;

    @Column(name = "nom")
    public String nom;


    @Column(name = "prenom")
    public String prenom;


    @Column(name = "dtn")
    public Date dtn;


    @Column(name = "dtembauche")
    public Date dtembauche;

    @Column(name = "service")
    public String service;

    @Column(name = "poste")
    public String poste;

    @Column(name = "fonction")
    public String fonction;

}

