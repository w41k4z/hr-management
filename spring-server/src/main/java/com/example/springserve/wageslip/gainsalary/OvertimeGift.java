package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class OvertimeGift extends GainSalary{

    public OvertimeGift (PersonnelService personnelService, Long IdPersonnel, double percent, String percentLabel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Heures supplémentaires majorées de "+ percentLabel);
        super.setNombre(null);
        Double montant = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).poste.starting_salary;
        super.setMontant(null);
        super.setTaux((montant * percent)/173.33);
    }
    
}
