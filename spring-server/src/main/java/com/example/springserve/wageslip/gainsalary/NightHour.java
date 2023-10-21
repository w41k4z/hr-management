package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class NightHour extends GainSalary{

    public NightHour (PersonnelService personnelService, Long IdPersonnel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Majoration pour heures de nuit");
        super.setNombre(null);
        Double montant = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).poste.starting_salary;
        super.setMontant(null);
        super.setTaux((montant * 3) /173.33);
    }
    
}
