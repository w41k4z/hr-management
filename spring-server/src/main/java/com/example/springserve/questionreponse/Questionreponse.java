package com.example.springserve.questionreponse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "questionreponse")
public class Questionreponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idquestion")
    public Long idquestion;
    @Column(name = "idreponse")
    public Long idreponse;
    @Column(name = "status")
    public String status;
    

}