/* COMPONENTS */
import React, { useEffect, useState } from "react";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACE */
import PositionInterface from "../../model/PositionInterface";

/* REQUEST */
import Axios from "../../http-client-side/Axios";

const Positions = () => {
  /* HOOKS */
  const [positions, setPositions] = useState<PositionInterface[]>([]);
  const [positionToUpdate, setPositionToUpdate] = useState<PositionInterface>(
    {} as PositionInterface
  );
  const [newPosition, setNewPosition] = useState<PositionInterface>(
    {} as PositionInterface
  );
  useEffect(() => {
    fetch("http://localhost:8080/Poste/getAll")
      .then((res) => res.json())
      .then((data) => setPositions(data));
  }, []);

  /* LOGIC */
  const addNewPosition = async () => {
    const formData = new FormData();
    formData.append("nom", newPosition.nom);
    await Axios.post("/Poste/save", formData)
      .then((res) => {
        const newPositions = [...positions];
        newPositions.push(res.data);
        setPositions(newPositions);
        alert("insertion ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  const deletePosition = async (data: PositionInterface) => {
    await Axios.delete(`/Poste/deleteById/${data.id}`).then(() => {
      const newPositions = [...positions].filter(
        (service) => service.id !== data.id
      );
      setPositions(newPositions);
      alert("deletion ok");
    });
  };

  const updatePosition = async (data: PositionInterface) => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("nom", data.nom);
    await Axios.post("/Poste/save", formData)
      .then(() => {
        const newPositions = [...positions];
        newPositions.forEach((service) => {
          if (service.id === data.id) {
            service.nom = positionToUpdate.nom;
            setPositionToUpdate({} as PositionInterface);
          }
        });
        setPositions(newPositions);
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
            setNewPosition({ id: newPosition.id, nom: e.target.value });
          }}
        />
      ),
    },
  ];

  const updateModalFormInputs = (row: PositionInterface) => [
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
            setPositionToUpdate({ id: row.id, nom: e.target.value });
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
      title="Positions"
      columns={columns}
      data={positions}
      dataPropIDName={"id"}
      addModalFormInputs={insertModalFormInputs}
      onAdd={addNewPosition}
      onUpdate={updatePosition}
      onDelete={deletePosition}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={function (file: File): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Positions;
