/* COMPONENTS */
import React, { useEffect, useState } from "react";
import BasicCRUDTable from "../../components/datatable/BasicCRUDTable";
import { TableColumn } from "../../components/datatable/TableColumn";

/* INTERFACE */
import ServiceInterface from "../../model/ServiceInterface";

/* REQUEST */
import Axios from "../../http-client-side/Axios";

const Services = () => {
  /* HOOKS */
  const [services, setServices] = useState<ServiceInterface[]>([]);
  const [serviceToUpdate, setServiceToUpdate] = useState<ServiceInterface>(
    {} as ServiceInterface
  );
  useEffect(() => {
    fetch("http://localhost:8080/Service/getAll")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const [newService, setNewService] = useState<ServiceInterface>(
    {} as ServiceInterface
  );

  /* LOGIC */
  const addNewService = async () => {
    const formData = new FormData();
    formData.append("nom", newService.nom);
    await Axios.post("/Service/save", formData)
      .then((res) => {
        const newServices = [...services];
        newServices.push(res.data);
        setServices(newServices);
        alert("insertion ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  const deleteService = async (data: ServiceInterface) => {
    await Axios.delete(`/Service/deleteById/${data.id}`).then((res) => {
      const newServices = [...services].filter(
        (service) => service.id !== data.id
      );
      setServices(newServices);
      alert("deletion ok");
    });
  };

  const updateService = async (data: ServiceInterface) => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("nom", data.nom);
    await Axios.post("/Service/save", formData)
      .then((res) => {
        const newServices = [...services];
        newServices.forEach((service) => {
          if (service.id === data.id) {
            service.nom = serviceToUpdate.nom;
            setServiceToUpdate({} as ServiceInterface);
          }
        });
        setServices(newServices);
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
            setNewService({ id: newService.id, nom: e.target.value });
          }}
        />
      ),
    },
  ];

  const updateModalFormInputs = (row: ServiceInterface) => [
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
            setServiceToUpdate({ id: row.id, nom: e.target.value });
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
      title="Services"
      columns={columns}
      data={services}
      dataPropIDName={"id"}
      addModalFormInputs={insertModalFormInputs}
      onAdd={addNewService}
      onUpdate={updateService}
      onDelete={deleteService}
      updateModalFormInputs={updateModalFormInputs}
      uploadCall={function (file: File): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Services;
