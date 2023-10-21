package com.example.springserve.wageslip.gainsalary.mother;

public class GainSalary {
    private Long    IdPersonnel;
    private String  Designation;
    private Integer Nombre;
    private Double  Taux;
    private Double  Montant;

    public Long getIdPersonnel(){
        return IdPersonnel;
    }

    public void setIdPersonnel (Long id){
        this.IdPersonnel  = id;
    }

    public String getDesignation() {
        return Designation;
    }

    public void setDesignation(String Designation) {
        this.Designation = Designation;
    }

    public Integer getNombre() {
        return Nombre;
    }

    public void setNombre(Integer Nombre) {
        this.Nombre = Nombre;
    }

    public Double getTaux() {
        return Taux;
    }

    public void setTaux(Double Taux) {
        this.Taux = Taux;
    }

    public Double getMontant() {
        return Montant;
    }

    public void setMontant(Double Montant) {
        this.Montant = Montant;
    }
}

