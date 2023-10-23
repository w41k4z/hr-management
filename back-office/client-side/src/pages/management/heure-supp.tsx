/* COMPONENTS */
import React, { useEffect, useState } from "react";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACE */
import HeureSuppInterface from "../../model/HeureSupp";
import TypeHeureSuppInterface from "../../model/TypeHs";
import { Personnel } from "../../model/PersonnelInterface";

/* REQUEST */
import Axios from "../../http-client-side/Axios";

const HeureSupp = () => {
  /* HOOKS */
  const [heureSupps, setHeureSupps] = useState<HeureSuppInterface[]>([]);
  const [typeHeureSupps, setTypeHeureSupps] = useState<
    TypeHeureSuppInterface[]
  >([]);
  const [personnelList, setPersonnelList] = useState<Personnel[]>([]);
  const [heureSuppToUpdate, setHeureSuppToUpdate] =
    useState<HeureSuppInterface>({} as HeureSuppInterface);
  const [newHeureSupp, setNewHeureSupp] = useState<HeureSuppInterface>(
    {} as HeureSuppInterface
  );
  useEffect(() => {
    fetch("http://localhost:8080/HeureSupp/getAll")
      .then((res) => res.json())
      .then((data) => setHeureSupps(data));
    fetch("http://localhost:8080/TypeHS/getAll")
      .then((res) => res.json())
      .then((date) => {
        setTypeHeureSupps(date);
      });
    fetch("http://localhost:8080/Personnel/getAll")
      .then((res) => res.json())
      .then((date) => {
        setPersonnelList(date);
      });
  }, []);

  /* LOGIC */
  const addNewHeureSupp = async () => {
    const newHeureSuppp = {
      idPersonnel: newHeureSupp.idPersonnel,
      date: newHeureSupp.date,
      idTypeHS: newHeureSupp.idTypeHS,
      nombreHeure: newHeureSupp.nombreHeure,
    }
    await Axios.post("/HeureSupp/save", newHeureSuppp)
      .then((res) => {
        const newHeureSupps = [...heureSupps];
        newHeureSupps.push(res.data);
        setHeureSupps(newHeureSupps);
        alert("insertion ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  const deleteHeureSupp = async (data: HeureSuppInterface) => {
    await Axios.delete(`/HeureSupp/deleteById/${data.id}`).then(() => {
      const newHeureSupps = [...heureSupps].filter(
        (service) => service.id !== data.id
      );
      setHeureSupps(newHeureSupps);
      alert("deletion ok");
    });
  };

  const updateHeureSupp = async (data: HeureSuppInterface) => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("nombreHeure", data.nombreHeure + "");
    formData.append("idTypeHS", data.idTypeHS + "");
    await Axios.post("/Grade/save", formData)
      .then(() => {
        const newHeureSupps = [...heureSupps];
        newHeureSupps.forEach((service) => {
          if (service.id === data.id) {
            service.nombreHeure = heureSuppToUpdate.nombreHeure;
            service.idTypeHS = heureSuppToUpdate.idTypeHS;
            setHeureSuppToUpdate({} as HeureSuppInterface);
          }
        });
        setHeureSupps(newHeureSupps);
      })
      .catch((value) => {
        alert(value);
      });
  };

  /* ELEMENTS */
  const insertModalFormInputs = [
    {
      label: (
        <label htmlFor="date" className="form-label">
          Date
        </label>
      ),
      input: (
        <input
          type="date"
          className="form-control"
          id="date"
          onChange={(e) => {
            setNewHeureSupp({
              id: newHeureSupp.id,
              date: new Date(e.target.value),
              nombreHeure: newHeureSupp.nombreHeure,
              idPersonnel: newHeureSupp.idPersonnel,
              idTypeHS: newHeureSupp.idTypeHS,
            });
          }}
        />
      ),
    },
    {
      label: (
        <label htmlFor="in-type" className="form-label">
          Type
        </label>
      ),
      input: (
        <select
          id="in-type"
          className="form-select"
          onChange={(e) => {
            setNewHeureSupp({
              id: newHeureSupp.id,
              date: newHeureSupp.date,
              nombreHeure: newHeureSupp.nombreHeure,
              idPersonnel: newHeureSupp.idPersonnel,
              idTypeHS: Number.parseInt(e.target.value),
            });
          }}
        >
          <option disabled selected>
            Type
          </option>
          {typeHeureSupps.map((typeHeureSupp) => {
            return (
              <option key={typeHeureSupp.id} value={typeHeureSupp.id}>
                {typeHeureSupp.nom}
              </option>
            );
          })}
        </select>
      ),
    },
    {
      label: (
        <label htmlFor="personnel" className="form-label">
          Personnel
        </label>
      ),
      input: (
        <select
          className="form-select"
          id="personnel"
          onChange={(e) => {
            setNewHeureSupp({
              id: newHeureSupp.id,
              date: newHeureSupp.date,
              nombreHeure: newHeureSupp.nombreHeure,
              idPersonnel: Number.parseInt(e.target.value),
              idTypeHS: newHeureSupp.idTypeHS,
            });
          }}
        >
          <option disabled selected>
            Personnel
          </option>
          {personnelList.map((person) => {
            return (
              <option key={person.id} value={person.id}>
                {person.nom}
              </option>
            );
          })}
        </select>
      ),
    },
    {
      label: (
        <label htmlFor="nbr_heure" className="form-label">
          Hour number
        </label>
      ),
      input: (
        <input
          type="number"
          className="form-control"
          id="nbr_heure"
          onChange={(e) => {
            setNewHeureSupp({
              id: newHeureSupp.id,
              date: newHeureSupp.date,
              nombreHeure: Number.parseInt(e.target.value),
              idPersonnel: newHeureSupp.idPersonnel,
              idTypeHS: newHeureSupp.idTypeHS,
            });
          }}
        />
      ),
    },
  ];

  const updateModalFormInputs = (row: HeureSuppInterface) => [
    {
      label: (
        <label htmlFor="date" className="form-label">
          Date
        </label>
      ),
      input: (
        <input
          type="date"
          className="form-control"
          id="date"
          defaultValue={row.date + ""}
          onChange={(e) => {
            setHeureSuppToUpdate({
              id: newHeureSupp.id,
              date: new Date(e.target.value),
              nombreHeure: heureSuppToUpdate.nombreHeure,
              idPersonnel: newHeureSupp.idPersonnel,
              idTypeHS: newHeureSupp.idTypeHS,
            });
          }}
        />
      ),
    },
    {
      label: (
        <label htmlFor="nbr_heure" className="form-label">
          Nombre d'heure
        </label>
      ),
      input: (
        <input
          type="number"
          className="form-control"
          id="nbr_heure"
          defaultValue={row.nombreHeure + ""}
          onChange={(e) => {
            setHeureSuppToUpdate({
              id: newHeureSupp.id,
              date: heureSuppToUpdate.date,
              nombreHeure: Number.parseInt(e.target.value),
              idPersonnel: newHeureSupp.idPersonnel,
              idTypeHS: newHeureSupp.idTypeHS,
            });
          }}
        />
      ),
    },
  ];

  /* CONST DATA */
  const columns: TableColumn[] = [
    {
      name: "Type",
      propTarget: "idTypeHS",
      format: "default",
    },
    {
      name: "Date",
      propTarget: "date",
      format: "default",
    },
    {
      name: "Nombre Heure",
      propTarget: "nombreHeure",
      format: "number",
    },
  ];

  return (
    <BasicCRUDTable
      indexedRow
      title="Heure supp"
      columns={columns}
      data={heureSupps}
      dataPropIDName={"id"}
      addModalFormInputs={insertModalFormInputs}
      onAdd={addNewHeureSupp}
      onUpdate={updateHeureSupp}
      onDelete={deleteHeureSupp}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={function (file: File): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default HeureSupp;
