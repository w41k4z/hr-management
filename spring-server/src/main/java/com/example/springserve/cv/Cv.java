package com.example.springserve.cv;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cv")
public class Cv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "cin")
    public String cin;
    @Column(name = "nom")
    public String nom;
    @Column(name = "prenom")
    public String prenom;
    @Column(name = "adresse")
    public String adresse;
    @Column(name = "tel")
    public String tel;
    @Column(name = "email")
    public String email;
    @Column(name = "sm")
    public String sm;
    @Column(name = "sexe")
    public String sexe;

}
