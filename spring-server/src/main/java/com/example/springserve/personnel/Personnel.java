package com.example.springserve.personnel;

import java.sql.Date;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;

import com.example.springserve.poste.Poste;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "personnel")
public class Personnel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "idposte")
    public Long idposte;

    @ManyToOne
    @JoinColumn(name = "idposte", insertable=false, updatable=false)
    public Poste poste;

    @Column(name = "idservice")
    public Long idservice;

    @Column(name = "nom")
    public String nom;

    @Column(name = "prenom")
    public String prenom;

    @Column(name = "dtn")
    public Date dtn;

    @Column(name = "dtembauche")
    public Date dtembauche;

    @Column(name = "idfonction")
    public Long idfonction;    

    public List<Integer> getSeniority(){
        LocalDate dateEmbauche = dtembauche.toLocalDate();
        LocalDate dateActuelle = LocalDate.now();
        Period difference = Period.between(dateEmbauche, dateActuelle);

        Integer jours = difference.getDays();
        Integer mois = difference.getMonths();
        Integer annees = difference.getYears();
        
        List<Integer> answer = new ArrayList<>();
        answer.add(annees);        
        answer.add(mois);
        answer.add(jours);

        return answer;
    }
}
