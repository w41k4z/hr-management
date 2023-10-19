package com.example.springserve.v_conge.v_prendreconge;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "v_prendreconge")
@Immutable
public class V_prendreconge {
    
    @Id
    @Column(name = "idpersonnel")
    public Long idpersonnel;

    @Column(name = "nom")
    public String nom;


    @Column(name = "prenom")
    public String prenom; 

}

