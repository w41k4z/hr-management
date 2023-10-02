/* COMPONENTS */
import React, { useEffect, useState } from "react";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACE */
import SectorInterface from "../../model/SectorInterface";

/* REQUEST */
import Axios from "../../http-client-side/Axios";

const Sectors = () => {
  /* HOOKS */
  const [sectors, setSectors] = useState<SectorInterface[]>([]);
  const [sectorToUpdate, setSectorToUpdate] = useState<SectorInterface>(
    {} as SectorInterface
  );
  const [newSector, setNewSector] = useState<SectorInterface>(
    {} as SectorInterface
  );
  useEffect(() => {
    fetch("http://localhost:8080/Filiere/getAll")
      .then((res) => res.json())
      .then((data) => setSectors(data));
  }, []);

  /* LOGIC */
  const addNewSector = async () => {
    const formData = new FormData();
    formData.append("nom", newSector.nom);
    await Axios.post("/Filiere/save", formData)
      .then((res) => {
        const newSectors = [...sectors];
        newSectors.push(res.data);
        setSectors(newSectors);
        alert("insertion ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  const deleteSector = async (data: SectorInterface) => {
    await Axios.delete(`/Filiere/deleteById/${data.id}`).then(() => {
      const newsectors = [...sectors].filter(
        (service) => service.id !== data.id
      );
      setSectors(newsectors);
      alert("deletion ok");
    });
  };

  const updateSector = async (data: SectorInterface) => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("nom", data.nom);
    await Axios.post("/Filiere/save", formData)
      .then(() => {
        const newsectors = [...sectors];
        newsectors.forEach((service) => {
          if (service.id === data.id) {
            service.nom = sectorToUpdate.nom;
            setSectorToUpdate({} as SectorInterface);
          }
        });
        setSectors(newsectors);
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
            setNewSector({ id: newSector.id, nom: e.target.value });
          }}
        />
      ),
    },
  ];

  const updateModalFormInputs = (row: SectorInterface) => [
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
            setSectorToUpdate({ id: row.id, nom: e.target.value });
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
      title="Sectors"
      columns={columns}
      data={sectors}
      dataPropIDName={"id"}
      addModalFormInputs={insertModalFormInputs}
      onAdd={addNewSector}
      onUpdate={updateSector}
      onDelete={deleteSector}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={function (file: File): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Sectors;
