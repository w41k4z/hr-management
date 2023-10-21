package com.example.springserve.wageslip.gainsalary.mother;

import java.util.List;

public class GrossPay extends GainSalary {

    public GrossPay (List<GainSalary> gainsalaries) {
        super.setDesignation("Salaire brut");
        double total = 0;
        for(GainSalary g : gainsalaries){
            if(g.getMontant() != null)total += g.getMontant();
        }
        super.setMontant(total);
    }
    
}
