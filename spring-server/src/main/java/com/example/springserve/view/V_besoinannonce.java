package com.example.springserve.view;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "V_besoinannonce")
@Immutable
public class V_besoinannonce {

    @Id
    @Column(name = "id")
    public Long id;
    @Column(name = "idannonce")
    public Long idannonce;
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

