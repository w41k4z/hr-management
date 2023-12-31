package com.example.springserve.questionreponse;

import com.example.springserve.question.Question;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "questionreponse")
public class Questionreponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name = "idquestion", nullable = false)
    public Question question;
    
    @Column(name = "reponse", nullable = false)
    public String reponse;

    @Column(name = "status", nullable = false)
    public String status;
    
}