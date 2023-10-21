package com.example.springserve.wageslip.straysalary;

import java.util.List;

import com.example.springserve.wageslip.straysalary.mother.StraySalary;
import com.example.springserve.wageslip.straysalary.mother.StrayTotal;

public class TotalDetention extends StrayTotal{

    public TotalDetention(List<StraySalary> straysalaries, int begin, int end){
        super("Total des retenues" , straysalaries, begin, end);
    }
    
}
