package com.example.springserve.v_conge.v_terminerconge;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "V_terminerconge")
@Immutable
public class V_terminerconge {

    @Id
    @Column(name = "iddebut")
    public Long iddebut;


    @Column(name = "idpersonnel")
    public Long idpersonnel;


    @Column(name = "nom")
    public String nom;

    @Column(name = "prenom")
    public String prenom;

    @Column(name = "debut")
    public Date debut;

    @Column(name = "type")
    public Long type;

    @Column(name = "motif")
    public String motif;

}