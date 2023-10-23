export default interface V_payroll {
  date?: Date;
  number?: number;
  matricule?: number;
  cnaps?: number;
  //   id: number;
  fullName: string;
  dtembauche?: Date;
  month_abs?: Date;
  classification?: string;
  fonction: string;
  service: string;
  poste: string;
  startingSalary: number;
  monthBaseSalary?: number;
  indemnite?: number;
  grossSalary?: number;
  cnaps_1?: number;
  ostie_1?: number;
  ostie_5?: number;
  netSalary?: number;
  netToPay?: number;
  netOfMonth?: number;
}
