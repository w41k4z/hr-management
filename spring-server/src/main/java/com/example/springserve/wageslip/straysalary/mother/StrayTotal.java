package com.example.springserve.wageslip.straysalary.mother;

import java.util.List;

public class StrayTotal extends StraySalary{

    public StrayTotal(String designation, List<StraySalary> straysalaries, int begin, int end){
        double montant = 0;
        StraySalary a = null;
        for(int i =  begin ; i <= end ; i++){
            a = straysalaries.get(i);
            if(a.getMontant() == null)continue;
            montant += a.getMontant();
        }
        super.setIdPersonnel(null);
        super.setDesignation(designation);
        super.setTaux(null);
        super.setMontant(montant);
    }
    
}
