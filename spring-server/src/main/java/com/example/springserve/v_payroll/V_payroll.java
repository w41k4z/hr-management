package com.example.springserve.v_payroll;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "v_payroll")
@Immutable
public class V_payroll {

    @Id
    @Column(name = "id")
    public Long id;

    @Column(name = "full_name")
    public String fullName;

    @Column(name = "dtembauche")
    public Date dtembauche;

    @Column(name = "fonction")
    public String fonction;

    @Column(name = "service")
    public String service;

    @Column(name = "poste")
    public String poste;

    @Column(name = "starting_salary")
    public Double startingSalary;
}
