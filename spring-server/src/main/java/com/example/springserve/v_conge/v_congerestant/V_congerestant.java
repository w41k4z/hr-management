package com.example.springserve.v_conge.v_congerestant;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "V_congerestant")
@Immutable
public class V_congerestant {

    @Id
    @Column(name = "idpersonnel")
    public Long idpersonnel;
    
    @Column(name = "nom")
    public String nom;

    @Column(name = "prenom")
    public String prenom;

    @Column(name = "reste")
    public Double reste;
}
