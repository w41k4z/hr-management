/* COMPONENTS */
import React, { useEffect } from "react";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACES */
import ResumeInterface from "../../model/ResumeInterface";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";

function ListResume() {
  /* HOOKS */
  const [resumes, setResumes] = React.useState<ResumeInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/Cv/getAll")
      .then((res) => res.json())
      .then((data) => setResumes(data));
  }, []);

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
    <BasicCRUDTable
      columns={columns}
      data={resumes}
      dataPropIDName={"id"}
      title={"Application list"}
      hasExportPdf
      indexedRow
      addModalFormInputs={[]}
      onAdd={() => {}}
      onUpdate={() => {}}
      onDelete={() => {}}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={() => {}}
    />
  );
}

export default ListResume;
