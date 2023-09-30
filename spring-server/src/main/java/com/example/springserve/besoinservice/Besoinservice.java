package com.example.springserve.besoinservice;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "besoinservice")
public class Besoinservice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "datebesoinservice")
    public Date datebesoinservice;

    @Column(name = "idservice")
    public Long idservice;

    @Column(name = "idregion")
    public Long idregion;

    @Column(name = "idposte")
    public Long idposte;

    @Column(name = "qualite")
    public String qualite;

    @Column(name = "description")
    public String description;

    @Column(name = "typecontrat")
    public String typecontrat;

    @Column(name = "volumetache")
    public Double volumetache;

    @Column(name = "volumehoraire")
    public Double volumehoraire;
}
