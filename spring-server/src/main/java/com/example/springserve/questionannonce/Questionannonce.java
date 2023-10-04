package com.example.springserve.questionannonce;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "questionannonce")
public class Questionannonce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idannonce")
    public Long idannonce;

    @Column(name = "idquestion")
    public Long idquestion;

    @Column(name = "date_question_annonce", columnDefinition = "DATE DEFAULT CURRENT_DATE")
    public Date date_question_annonce;
}