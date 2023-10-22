/* COMPONENTS */
import React, { ReactNode, useEffect, useState } from "react";
import BasicCRUDTable from "../components/datatable/BasicCRUDTable";
import { TableColumn } from "../components/datatable/TableColumn";

/* INTERFACE */
import GradeInterface from "../model/GradeInterface";

/* REQUEST */
import Axios from "../http-client-side/Axios";

const Payroll = () => {
  /* HOOKS */
  const [grades, setGrades] = useState<GradeInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/Grade/getAll")
      .then((res) => res.json())
      .then((data) => setGrades(data));
  }, []);

  /* CONST DATA */
  const columns: TableColumn[] = [
    {
      name: "Date",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "NBRE",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "N* MATR",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "N* CNAPS",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Nom/Prenom",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Date d'embauche",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Absence du mois",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "CAT",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Fonction",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Salaire de base",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Retenues sur absence",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Salaire de base du mois",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Indemnite",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Rappel",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Autres",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "HP SUP/MAJ",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Salaire brut",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Cnaps 1%",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "OSTIE 1%",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "OSTIE 5%",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Revenu imposable",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Impot du",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Enfant a charge",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Montant",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "IGR net",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Autre retenues",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Salaire net",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Avance",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Net a payer",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Autre indemnite",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "Net du mois",
      propTarget: "nom",
      format: "default",
    },
  ];

  return (
    <BasicCRUDTable
      title="Payroll"
      indexedRow
      hasAction={false}
      columns={columns}
      data={[]}
      dataPropIDName={""}
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
