package com.example.springserve.wageslip.straysalary;

import java.util.List;

import com.example.springserve.wageslip.straysalary.mother.StraySalary;
import com.example.springserve.wageslip.straysalary.mother.StrayTotal;

public class TotalIrsa extends StrayTotal{

    public TotalIrsa(List<StraySalary> straysalaries, int begin, int end){
        super("TOTAL IRSA" , straysalaries, begin, end);
    }
    
}
