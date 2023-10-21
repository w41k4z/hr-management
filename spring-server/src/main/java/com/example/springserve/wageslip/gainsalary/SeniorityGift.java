package com.example.springserve.wageslip.gainsalary;

import java.util.List;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class SeniorityGift extends GainSalary{
              
    public SeniorityGift (PersonnelService personnelService, Long IdPersonnel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Primes d'ancienneté");
        super.setNombre(null);

        List<Integer> seniority = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).getSeniority();
        Double montant = null;
        if(seniority.get(0) >= 1 && seniority.get(1) >= 6)montant = Double.valueOf(15000);

        super.setMontant(montant);
        super.setTaux(null);
    }
}
