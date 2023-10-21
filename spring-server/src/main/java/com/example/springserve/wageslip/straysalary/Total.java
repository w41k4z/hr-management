package com.example.springserve.wageslip.straysalary;

import java.util.List;

import com.example.springserve.wageslip.straysalary.mother.StraySalary;

public class Total extends StraySalary{

    public Total(List<StraySalary> straysalaries){
        double montant = 0;
        for(StraySalary a : straysalaries){
            if(a.getMontant() == null)continue;
            montant += a.getMontant();
        }
        super.setIdPersonnel(null);
        super.setDesignation("TOTAL IRSA");
        super.setTaux(null);
        super.setMontant(montant);
    }
    
}
