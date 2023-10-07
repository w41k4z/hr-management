/* COMPONENTS */
import React, { useState } from "react";
import DegreeInformation from "../../components/degree-info/DegreeInformation";
import ExperienceInformation from "../../components/experience-info/ExperienceInformation";

/* COM */
import Axios from "../../http-client-side/Axios";

/* STYLES */
import "../../assets/css/resume.css";
import Region from "../../model/RegionInterface";

function Resume({ regions }: { regions: Region[] }) {
  /* HOOKS */
  const [NIC, setNIC] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [maritialStatus, setMaritialStatus] = useState("married");
  const [gender, setGender] = useState("male");
  const [region, setRegion] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  /* LOGIC */
  const send = async () => {
    const formData = new FormData();
    formData.append("cin", NIC);
    formData.append("nom", name);
    formData.append("prenom", firstName);
    formData.append("sm", maritialStatus);
    formData.append("sexe", gender);
    formData.append("adresse", region !== "" ? region : "1");
    formData.append("tel", number);
    formData.append("email", email);
    await Axios.post("/Cv/save", formData)
      .then((res) => {
        alert("ok");
      })
      .catch((value) => {
        alert(value);
      });
  };

  return (
    <>
      <h2 className="card-title ms-2" style={{ fontFamily: "Arial" }}>
        Resume Form
      </h2>
      <div className="card-body">
        <section className="personal-info-section d-flex flex-md-row flex-sm-column flex-wrap justify-content-md-between justify-content-sm-center">
          <div className="public-info">
            <h3 className="title">
              <b>CV</b>
            </h3>
            <div className="mt-4 input-group justify-content-between">
              <label htmlFor="nic">NIC</label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                name="nic"
                placeholder="xxxxxxxxxxxxxxxxx"
                id="nic"
                defaultValue={NIC}
                onChange={(e) => {
                  setNIC(e.target.value);
                }}
              />
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                id="name"
                defaultValue={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                id="firstName"
                defaultValue={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="maritialStatus">M. status</label>
              <select
                className="form-select-sm w-50"
                id="maritialStatus"
                onChange={(e) => {
                  setMaritialStatus(e.target.value);
                }}
              >
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="gender">Gender</label>
              <select className="form-select-sm w-50" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="ms-md-2 mt-4 mt-md-0 contact-info">
            <h3 className="title">
              <b>Contact</b>
            </h3>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="address">Region : </label>
              <select
                className="form-select-sm w-50"
                id="address"
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              >
                {regions.map((region) => {
                  return (
                    <option key={region.id} value={region.id}>
                      {region.nom}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="number">Number : </label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                id="number"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                id="email"
              />
            </div>
          </div>
        </section>
        <section className="professional-info-section">
          <DegreeInformation />
          <ExperienceInformation onSave={send} />
        </section>
      </div>
    </>
  );
}

export default Resume;
