/* COMPONENTS */
import React, { useEffect, useState } from "react";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACE */
import RegionInterface from "../../model/RegionInterface";

/* REQUEST */
import Axios from "../../http-client-side/Axios";

const Regions = () => {
  /* HOOKS */
  const [regions, setRegions] = useState<RegionInterface[]>([]);
  const [regionToUpdate, setRegionToUpdate] = useState<RegionInterface>(
    {} as RegionInterface
  );
  const [newRegion, setNewRegion] = useState<RegionInterface>(
    {} as RegionInterface
  );
  useEffect(() => {
    fetch("http://localhost:8080/Region/getAll")
      .then((res) => res.json())
      .then((data) => setRegions(data));
  }, []);

  /* LOGIC */
  const addNewRegion = async () => {
    const formData = new FormData();
    formData.append("nom", newRegion.nom);
    await Axios.post("/Region/save", formData)
      .then((res) => {
        const newRegions = [...regions];
        newRegions.push(res.data);
        setRegions(newRegions);
        alert("insertion ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  const deleteRegion = async (data: RegionInterface) => {
    await Axios.delete(`/Region/deleteById/${data.id}`).then(() => {
      const newRegions = [...regions].filter(
        (service) => service.id !== data.id
      );
      setRegions(newRegions);
      alert("deletion ok");
    });
  };

  const updateRegion = async (data: RegionInterface) => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("nom", data.nom);
    await Axios.post("/Region/save", formData)
      .then(() => {
        const newRegions = [...regions];
        newRegions.forEach((service) => {
          if (service.id === data.id) {
            service.nom = regionToUpdate.nom;
            setRegionToUpdate({} as RegionInterface);
          }
        });
        setRegions(newRegions);
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
            setNewRegion({ id: newRegion.id, nom: e.target.value });
          }}
        />
      ),
    },
  ];

  const updateModalFormInputs = (row: RegionInterface) => [
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
            setRegionToUpdate({ id: row.id, nom: e.target.value });
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
      title="Regions"
      columns={columns}
      data={regions}
      dataPropIDName={"id"}
      addModalFormInputs={insertModalFormInputs}
      onAdd={addNewRegion}
      onUpdate={updateRegion}
      onDelete={deleteRegion}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={function (file: File): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Regions;
