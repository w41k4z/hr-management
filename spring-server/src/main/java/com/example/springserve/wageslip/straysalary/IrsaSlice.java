package com.example.springserve.wageslip.straysalary;

import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.straysalary.mother.StraySalary;

public class IrsaSlice extends StraySalary {
    
    public static IrsaCouple[] allSlice = new IrsaCouple[]{
        new IrsaCouple(350000, 50000 , 5 ),
        new IrsaCouple(400000, 100000, 10),
        new IrsaCouple(500000, 100000, 15),
        new IrsaCouple(600000, 200000, 20)
    };

    public IrsaSlice (PersonnelService personnelService, Long IdPersonnel, IrsaCouple irsaCouple, Double assessableSum){
        super.setIdPersonnel(IdPersonnel);
        super.setDesignation("Tranche IRSA I au dessus de "+ irsaCouple.slice);
        
        super.setTaux(irsaCouple.percent);
        super.setMontant(getSlicePay(irsaCouple, assessableSum));
    }
    
    public static double getAllSlicePay(Double assessableSum){
        return  getSlicePay(IrsaSlice.allSlice[0] , assessableSum) +
                getSlicePay(IrsaSlice.allSlice[1] , assessableSum) +
                getSlicePay(IrsaSlice.allSlice[2] , assessableSum) +
                getSlicePay(IrsaSlice.allSlice[3] , assessableSum) ;
    }

    public static double getSlicePay( IrsaCouple irsaCouple,  Double assessableSum){
        if(assessableSum <= irsaCouple.slice)return 0;
        double real = assessableSum - irsaCouple.slice;
        if(real > irsaCouple.max)return irsaCouple.max;
        return real * irsaCouple.percent / 100;
    }
}
