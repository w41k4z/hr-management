package com.example.springserve.heuresupp;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "heure_supp")
public class HeureSupp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idpersonnel")
    public Long idPersonnel;

    @Column(name = "date_")
    public Date date;

    @Column(name = "nb_heure")
    public Integer nombreHeure;

    @Column(name = "idtype_hs")
    public Long idTypeHS;
}
