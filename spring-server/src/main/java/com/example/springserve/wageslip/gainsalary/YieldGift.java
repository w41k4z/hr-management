package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class YieldGift extends GainSalary{

    public YieldGift (PersonnelService personnelService, Long IdPersonnel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Primes de rendement");
        super.setNombre(null);
        super.setMontant(null);
        super.setTaux(null);
    }
}
