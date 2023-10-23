package com.example.springserve.wageslip.gainsalary;

import com.example.springserve.helpers.OptionalGet;
import com.example.springserve.heuresupp.HeureSupp;
import com.example.springserve.heuresupp.HeureSuppService;
import com.example.springserve.personnel.PersonnelService;
import com.example.springserve.typeheuresupp.TypeHs;
import com.example.springserve.wageslip.gainsalary.mother.GainSalary;

public class OvertimeGift extends GainSalary{

    public OvertimeGift (PersonnelService personnelService, HeureSuppService heureSuppService ,Long IdPersonnel, TypeHs type_heure_supp) {
        double percent = type_heure_supp.pourcentage;
        String percentLabel = type_heure_supp.pourcentage + "%";

        HeureSupp heureSupp = heureSuppService.getHeureSuppByIdPersonnel(IdPersonnel);
        if(heureSupp == null)
        {
            heureSupp = new HeureSupp();
        }

        this.setIdPersonnel(IdPersonnel);
        super.setDesignation("Heures supplémentaires \"" + type_heure_supp.nom +" \" majorées de "+ percentLabel);
        super.setNombre(heureSupp.nombreHeure);

        Double montant = OptionalGet.get(personnelService.getPersonnelById(IdPersonnel)).poste.starting_salary;
        Double taux = (montant * percent)/173.33;

        if(heureSupp.nombreHeure == null)montant =  null;
        else montant = taux * heureSupp.nombreHeure;
        super.setMontant(montant);
        super.setTaux(taux);
    }
    
}
