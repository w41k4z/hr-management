package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class DeductibleAbsence extends GainSalary{

    public DeductibleAbsence (PersonnelService personnelService, Long IdPersonnel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Absences déductibles");
        super.setNombre(null);
        Double montant = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).poste.starting_salary;
        super.setMontant(null);
        super.setTaux(montant/173.33);
    }
    
}
