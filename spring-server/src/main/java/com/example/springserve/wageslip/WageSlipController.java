package com.example.springserve.wageslip;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.wageslip.gainsalary.AdvanceNoticeRight;
import com.example.springserve.wageslip.gainsalary.AnteriorBackPay;
import com.example.springserve.wageslip.gainsalary.BasicSalary;
import com.example.springserve.wageslip.gainsalary.DeductibleAbsence;
import com.example.springserve.wageslip.gainsalary.DismissalRights;
import com.example.springserve.wageslip.gainsalary.HolidayRight;
import com.example.springserve.wageslip.gainsalary.NightHour;
import com.example.springserve.wageslip.gainsalary.OvertimeGift;
import com.example.springserve.wageslip.gainsalary.SeniorityGift;
import com.example.springserve.wageslip.gainsalary.YieldGift;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;
import com.example.springserve.wageslip.gainsalary.mother.GrossPay;
import com.example.springserve.wageslip.straysalary.CnapsDetention;
import com.example.springserve.wageslip.straysalary.HealthDetention;
import com.example.springserve.wageslip.straysalary.IrsaSlice;
import com.example.springserve.wageslip.straysalary.TotalDetention;
import com.example.springserve.wageslip.straysalary.TotalIrsa;
import com.example.springserve.wageslip.straysalary.mother.StraySalary;

@RestController
@RequestMapping("/WageSlip")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class WageSlipController {

    @Autowired
    PersonnelService personnelService;

    @GetMapping("/getGainSalary/{idPersonne}")
    public List<GainSalary> getAllSalaryGain(@PathVariable Long idPersonne) {
        List<GainSalary> result = new ArrayList<GainSalary>();
        result.add(new BasicSalary(personnelService,idPersonne));
        result.add(new DeductibleAbsence(personnelService,idPersonne));
        result.add(new YieldGift(personnelService,idPersonne));
        result.add(new SeniorityGift(personnelService,idPersonne));
        result.add(new OvertimeGift(personnelService,idPersonne, 30 , "30%" ));
        result.add(new OvertimeGift(personnelService,idPersonne, 40 , "40%" ));
        result.add(new OvertimeGift(personnelService,idPersonne, 50 , "50%" ));
        result.add(new OvertimeGift(personnelService,idPersonne, 100, "100%"));
        result.add(new NightHour(personnelService,idPersonne));
        result.add(new AnteriorBackPay(personnelService,idPersonne));
        result.add(new HolidayRight(personnelService,idPersonne));
        result.add(new AdvanceNoticeRight(personnelService,idPersonne));
        result.add(new DismissalRights(personnelService,idPersonne));
        result.add(new GrossPay(result));

        return result;
    }

    @GetMapping("/getStraySalary/{idPersonne}/{grossPay}")
    public List<StraySalary> getAllSalaryStray(@PathVariable Long idPersonne, @PathVariable Double grossPay) {
        List<StraySalary> result = new ArrayList<StraySalary>();
        result.add(new CnapsDetention(personnelService,idPersonne));
        result.add(new HealthDetention(personnelService,idPersonne));

        Double assessableSum = grossPay - result.get(0).getMontant() - result.get(1).getMontant();

        result.add(new IrsaSlice(personnelService,idPersonne, IrsaSlice.allSlice[0] , assessableSum ));
        result.add(new IrsaSlice(personnelService,idPersonne, IrsaSlice.allSlice[1] , assessableSum ));
        result.add(new IrsaSlice(personnelService,idPersonne, IrsaSlice.allSlice[2] , assessableSum ));
        result.add(new IrsaSlice(personnelService,idPersonne, IrsaSlice.allSlice[3] , assessableSum ));
        result.add(new TotalIrsa(result,2, 5));        
        result.add(new TotalDetention(result,0, result.size() - 1));

        return result;
    }
}
