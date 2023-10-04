package com.example.springserve.reponsetest;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "reponsetest")
public class ReponseTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idcv", nullable = false)
    public Long idcv;

    @Column(name = "idannonce", nullable = false)
    public Long idannonce;

    @Column(name = "point", nullable = false)
    public Double point;

    @Column(name = "date_test" , nullable = false)
    public Date date_test;

    @PrePersist
    public void prePersist() {
        if(date_test == null) date_test = new Date(new java.util.Date().getTime());
    }
}