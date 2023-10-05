import React, { useState, useEffect } from "react";
import { TableColumn } from "../../components/datatable/TableColumn";

import ResumeInterface from "../../model/ResumeInterface";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { V_besoinannonce } from "../../model/V_besoinannonce";

function ListInterview() {
  const [isPageLoad, setIsPageLoad] = useState<boolean>(false);
  const [all_V_besoinannonce , setBesoinAnnonce] = useState<V_besoinannonce[]>([]);
  useEffect(() => {
    if(isPageLoad === false){
      setIsPageLoad(true);
      fetch("http://localhost:8080/V_besoinannonce/getAll")
        .then((res) => res.json())
        .then((data) => setBesoinAnnonce(data));
    }
  } , [isPageLoad, all_V_besoinannonce]);

  const [idAnnonce , setIdAnnonce] = useState<number>(-1);
  const handleIdAnnonce = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdAnnonce(parseInt(e.target.value));
  }

  const [resumes, setResumes] = React.useState<ResumeInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/Cv/getAllByIdAnnonce/" + idAnnonce)
      .then((res) => res.json())
      .then((data) => setResumes(data));
  }, [idAnnonce]);

  /* ELEMENTS */
  const updateModalFormInputs = (row: ResumeInterface) => [
    {
      input: (
        <input
          type="hidden"
          className="form-control"
          id="id"
          value={row.id}
          required
        />
      ),
    },
    {
      label: (
        <label htmlFor="name" className="form-label">
          Name
        </label>
      ),
      input: (
        <input
          type="text"
          className="form-control"
          id="name"
          defaultValue={row.nom}
          disabled
        />
      ),
    },
    {
      label: (
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
      ),
      input: (
        <input
          type="text"
          className="form-control"
          id="fistName"
          defaultValue={row.prenom}
          disabled
        />
      ),
    },
    {
      label: (
        <label htmlFor="email" className="form-label">
          Email
        </label>
      ),
      input: (
        <input
          type="text"
          className="form-control"
          id="email"
          defaultValue={row.email}
          required
        />
      ),
    },
  ];

  /* CONST DATA */
  const columns: TableColumn[] = [
    {
      name: "Name",
      propTarget: "nom",
      format: "default",
    },
    {
      name: "First name",
      propTarget: "prenom",
      format: "default",
    },
    {
      name: "Email",
      propTarget: "email",
      format: "default",
    },
  ];

  return (    
    <div className="container mt-4">
      <div className='row'>
        <div className='col-md-12'>
          <h3>Annonce associé</h3>
        </div>
        <div>
          <select defaultValue={0} className="form-select" onChange={handleIdAnnonce} aria-label="Sélectionnez une annonce" >
            <option value={0} disabled selected>
              Sélectionnez une annonce
            </option>
            {all_V_besoinannonce.map((option) => (
              <option key={option.idannonce} value={option.idannonce}>
                {option.description}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BasicCRUDTable
        columns={columns}
        data={resumes}
        dataPropIDName={"id"}
        title={"List des admis à l' interview"}
        hasExportPdf
        indexedRow
        addModalFormInputs={[]}
        onAdd={() => {}}
        onUpdate={() => {}}
        onDelete={() => {}}
        updateModalFormInputs={updateModalFormInputs}
        uploadCall={() => {}}
      />
    </div>
  );
}

export default ListInterview;
