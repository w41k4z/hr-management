package com.example.springserve.finconge;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "finconge")
public class Finconge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "iddebut")
    public Long iddebut;

    @Column(name = "fin")
    public Date fin;

    @Column(name = "duree")
    public Double duree;
    
}
