/* COMPONENTS */
import React, { useEffect, useState } from "react";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACE */
import GradeInterface from "../../model/GradeInterface";

/* REQUEST */
import Axios from "../../http-client-side/Axios";

const Grades = () => {
  /* HOOKS */
  const [grades, setGrades] = useState<GradeInterface[]>([]);
  const [gradeToUpdate, setGradeToUpdate] = useState<GradeInterface>(
    {} as GradeInterface
  );
  const [newGrade, setNewGrade] = useState<GradeInterface>(
    {} as GradeInterface
  );
  useEffect(() => {
    fetch("http://localhost:8080/Grade/getAll")
      .then((res) => res.json())
      .then((data) => setGrades(data));
  }, []);

  /* LOGIC */
  const addNewGrade = async () => {
    const formData = new FormData();
    formData.append("nom", newGrade.nom);
    await Axios.post("/Grade/save", formData)
      .then((res) => {
        const newGrades = [...grades];
        newGrades.push(res.data);
        setGrades(newGrades);
        alert("insertion ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  const deleteGrade = async (data: GradeInterface) => {
    await Axios.delete(`/Grade/deleteById/${data.id}`).then(() => {
      const newGrades = [...grades].filter((service) => service.id !== data.id);
      setGrades(newGrades);
      alert("deletion ok");
    });
  };

  const updateGrade = async (data: GradeInterface) => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("nom", data.nom);
    await Axios.post("/Grade/save", formData)
      .then(() => {
        const newgrades = [...grades];
        newgrades.forEach((service) => {
          if (service.id === data.id) {
            service.nom = gradeToUpdate.nom;
            setGradeToUpdate({} as GradeInterface);
          }
        });
        setGrades(newgrades);
      })
      .catch((value) => {
        alert(value);
      });
  };

  /* ELEMENTS */
  const insertModalFormInputs = [
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
          onChange={(e) => {
            setNewGrade({ id: newGrade.id, nom: e.target.value });
          }}
        />
      ),
    },
  ];

  const updateModalFormInputs = (row: GradeInterface) => [
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
          onChange={(e) => {
            setGradeToUpdate({ id: row.id, nom: e.target.value });
          }}
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
  ];

  return (
    <BasicCRUDTable
      indexedRow
      title="Grades"
      columns={columns}
      data={grades}
      dataPropIDName={"id"}
      addModalFormInputs={insertModalFormInputs}
      onAdd={addNewGrade}
      onUpdate={updateGrade}
      onDelete={deleteGrade}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={function (file: File): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Grades;
