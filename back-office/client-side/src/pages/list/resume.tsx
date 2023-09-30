/* COMPONENTS */
import React from "react";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACES */
import ResumeInterface from "../../model/ResumeInterface";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";

function ListResume() {
  /* HOOKS */
  const [resumes, setResumes] = React.useState<ResumeInterface[]>([
    { id: 0, name: "Alain Rico", email: "alainricor@gmail.com" },
    { id: 1, name: "Jean Mirlin", email: "jeanmirlin@gmail.com" },
  ]);

  /* ELEMENTS */
  const addModalFormInputs = [
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
          maxLength={50}
          required
        />
      ),
    },
    {
      label: (
        <label htmlFor="email" className="form-label">
          Email
        </label>
      ),
      input: <input type="text" className="form-control" id="email" required />,
    },
  ];

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
          defaultValue={row.name}
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
      propTarget: "name",
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
      addModalFormInputs={addModalFormInputs}
      onAdd={() => {}}
      onUpdate={() => {}}
      onDelete={() => {}}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={() => {}}
    />
  );
}

export default ListResume;
