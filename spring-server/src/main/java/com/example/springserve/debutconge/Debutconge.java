package com.example.springserve.debutconge;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "debutconge")
public class Debutconge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idpersonnel")
    public Long idpersonnel;

    @Column(name = "type")
    public Long type;

    @Column(name = "debut")
    public Date debut;

    @Column(name = "motif")
    public String motif;

    @Column(name = "fin")
    public Date fin;

    @Column(name = "etat")
    public Long etat;
    
}
