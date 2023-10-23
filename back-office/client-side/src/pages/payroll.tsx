/* COMPONENTS */
import React, { ReactNode, useEffect, useState } from "react";
import BasicCRUDTable from "../components/datatable/BasicCRUDTable";
import { TableColumn } from "../components/datatable/TableColumn";

/* INTERFACE */
import PayrollInterface from "../model/V_payroll";

/* REQUEST */
import Axios from "../http-client-side/Axios";

const Payroll = () => {
  /* HOOKS */
  const [payrolls, setPayrolls] = useState<PayrollInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/V_payroll/getAll")
      .then((res) => res.json())
      .then((data) => setPayrolls(data));
  }, []);

  /* CONST DATA */
  const columns: TableColumn[] = [
    // {
    //   name: "Date",
    //   propTarget: "date",
    //   format: "default",
    // },
    // {
    //   name: "NBRE",
    //   propTarget: "number",
    //   format: "number",
    // },
    // {
    //   name: "N* MATR",
    //   propTarget: "matricule",
    //   format: "default",
    // },
    // {
    //   name: "N* CNAPS",
    //   propTarget: "cnaps",
    //   format: "default",
    // },
    {
      name: "Nom/Prenom",
      propTarget: "fullName",
      format: "default",
    },
    {
      name: "Date d'embauche",
      propTarget: "Date",
      format: "default",
    },
    // {
    //   name: "Absence du mois",
    //   propTarget: "month_abs",
    //   format: "default",
    // },
    // {
    //   name: "CAT",
    //   propTarget: "classification",
    //   format: "default",
    // },
    {
      name: "Fonction",
      propTarget: "fonction",
      format: "default",
    },
    {
      name: "Salaire de base",
      propTarget: "startingSalary",
      format: "currency",
    },
    // {
    //   name: "Retenues sur absence",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Salaire de base du mois",
    //   propTarget: "monthBaseSalary",
    //   format: "currency",
    // },
    // {
    //   name: "Indemnite",
    //   propTarget: "indemnite",
    //   format: "default",
    // },
    // {
    //   name: "Rappel",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Autres",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "HP SUP/MAJ",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Salaire brut",
    //   propTarget: "grossSalary",
    //   format: "currency",
    // },
    // {
    //   name: "Cnaps 1%",
    //   propTarget: "cnaps_1",
    //   format: "currency",
    // },
    // {
    //   name: "OSTIE 1%",
    //   propTarget: "ostie_1",
    //   format: "currency",
    // },
    // {
    //   name: "OSTIE 5%",
    //   propTarget: "ostie_5",
    //   format: "currency",
    // },
    // {
    //   name: "Revenu imposable",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Impot du",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Enfant a charge",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Montant",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "IGR net",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Autre retenues",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Salaire net",
    //   propTarget: "netSalary",
    //   format: "currency",
    // },
    // {
    //   name: "Avance",
    //   propTarget: "nom",
    //   format: "default",
    // },
    // {
    //   name: "Net a payer",
    //   propTarget: "netToPay",
    //   format: "currency",
    // },
    // {
    //   name: "Autre indemnite",
    //   propTarget: "nom",
    //   format: "default",
    // },
    {
      name: "Net du mois",
      propTarget: "netOfMonth",
      format: "currency",
    },
  ];

  return (
    <BasicCRUDTable
      title="Payroll"
      indexedRow
      hasAction={false}
      columns={columns}
      data={payrolls}
      hasExportPdf
      dataPropIDName={"id"}
      addModalFormInputs={[]}
      onAdd={() => {}}
      onUpdate={(row: any) => {}}
      onDelete={(row: any) => {}}
      updateModalFormInputs={(row: any) => []}
      uploadCall={(file: File) => {}}
    />
  );
};

export default Payroll;
