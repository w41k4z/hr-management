package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class AnteriorBackPay extends GainSalary{

    public AnteriorBackPay (PersonnelService personnelService, Long IdPersonnel) {
        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Rappels sur période antérieure");
        super.setNombre(null);
        super.setMontant(null);
        super.setTaux(null);
    }
    
}
