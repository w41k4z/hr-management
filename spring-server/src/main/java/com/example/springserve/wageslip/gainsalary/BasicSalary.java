package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class BasicSalary extends GainSalary{

    public BasicSalary (PersonnelService personnelService, Long IdPersonnel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Salaire");
        super.setNombre(1);
        System.out.println("1111111111111111111111111111111111111");
        personnelService.getAllPersonnels();
        System.out.println("222222222222222222222222222222222222");
        Double montant = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).poste.starting_salary;
        
        System.out.println("33333333333333333333333333333333333333");
        super.setMontant(montant);
        super.setTaux(montant/173.33);
    }
    
}
