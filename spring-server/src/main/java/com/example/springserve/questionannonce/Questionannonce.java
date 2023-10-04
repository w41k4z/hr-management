package com.example.springserve.questionannonce;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "questionannonce")
public class Questionannonce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    
    @Column(name = "idannonce", nullable = false)
    public Long idannonce;

    @Column(name = "idquestion", nullable = false)
    public Long idquestion;

    @Column(name = "date_question_annonce",nullable = false)
    public Date date_question_annonce;

    @PrePersist
    public void prePersist() {
        if(date_question_annonce == null) date_question_annonce = new Date(new java.util.Date().getTime());
    }
    //This method is not depend on database type/version underneath the Hibernate. 
    // Default value is set before persisting the mapping object.
}