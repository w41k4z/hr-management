package com.example.springserve.wageslip.straysalary;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.straysalary.mother.StraySalary;

public class CnapsDetention extends StraySalary {

    public CnapsDetention (PersonnelService personnelService, Long IdPersonnel){
        super.setIdPersonnel(IdPersonnel);
        super.setDesignation("Retenue CNaPS 1%");
        Double montant = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).poste.starting_salary;
        super.setTaux(null);
        super.setMontant(montant*1/100);
    }
       
}
