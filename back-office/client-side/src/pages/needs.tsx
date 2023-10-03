import React, { useEffect, useState } from "react";
import axiosInstance from "../http-client-side/Axios";
import Service from "../model/ServiceInterface";
import { useNavigate } from "react-router-dom";
import Region from "../model/RegionInterface";
import Poste from "../model/PosteInterface";

function Needs() {
  const [services, setServices] = useState<Service[]>([]);
  const [postes, setPostes] = useState<Poste[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const endpointUrl = "/Service/getAll";
    axiosInstance
      .get(endpointUrl)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);
  useEffect(() => {
    const endpointUrl = "/Region/getAll";
    axiosInstance
      .get(endpointUrl)
      .then((response) => {
        setRegions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching regions:", error);
      });
  }, []);
  useEffect(() => {
    const endpointUrl = "/Poste/getAll";
    axiosInstance
      .get(endpointUrl)
      .then((response) => {
        setPostes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching postes:", error);
      });
  }, []);

  const [formData, setFormData] = useState({
    // Initialize your form fields
    service: "1",
    poste: "1",
    aptitude: "Aptitude",
    location: "1",
    description: "Description",
    contrat: "Contrat",
    capacity: "0",
    capacitypers: "0",
    dat: ""
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can perform any necessary data processing or validation.

    // Navigate to the display page with the form data
    navigate("/offre/critere", { state: { formData } });
  };

  return (
    <>
      <h2 className="card-title ms-2">Services' needs</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="card-body">
          <div className="row g-3">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              className="form-select w-50"
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.nom}
                </option>
              ))}
            </select>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="criteria">
                <label htmlFor="post-title">Post title</label>
                <select
                  id="post-title"
                  name="poste"
                  className="form-select w-50"
                  required
                  value={formData.poste}
                  onChange={(e) =>
                    setFormData({ ...formData, poste: e.target.value })
                  }
                >
                  {postes.map((poste) => (
                    <option key={poste.id} value={poste.id}>
                      {poste.nom}
                    </option>
                  ))}
                </select>
              </div>
              <div className="criteria mt-3">
                <label htmlFor="dat">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="dat"
                  id="dat"
                  required
                  value={formData.dat}
                  onChange={(e) =>
                    setFormData({ ...formData, dat: e.target.value })
                  }
                />
              </div>
              <div className="criteria mt-3">
                <label htmlFor="aptitude">Aptitude</label>
                <input
                  type="text"
                  className="form-control"
                  name="aptitude"
                  id="aptitude"
                  required
                  value={formData.aptitude}
                  onChange={(e) =>
                    setFormData({ ...formData, aptitude: e.target.value })
                  }
                />
              </div>
              <div className="criteria mt-3">
                <label htmlFor="location">Location</label>
                <select
                  id="location"
                  name="location"
                  className="form-select"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.nom}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6 mt-sm-4">
              <textarea
                className="form-control"
                id="object"
                rows={2}
                name="description"
                placeholder="Description..."
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="contrat"
                id=""
                placeholder="Contract type"
                value={formData.contrat}
                onChange={(e) =>
                  setFormData({ ...formData, contrat: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="capacity"
                id=""
                placeholder="Capacity"
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({ ...formData, capacity: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="capacitypers"
                id=""
                placeholder="CapacityPers"
                value={formData.capacitypers}
                onChange={(e) =>
                  setFormData({ ...formData, capacitypers: e.target.value })
                }
              />
              <div className="mt-5 d-flex justify-content-end">
                <button className="btn btn-secondary">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Needs;
