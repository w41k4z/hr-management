/* COMPONENTS */
import React from "react";
import DegreeInformation from "../../components/degree-info/DegreeInformation";
import ExperienceInformation from "../../components/experience-info/ExperienceInformation";

/* STYLES */
import "../../assets/css/resume.css";

function Resume() {
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                name=""
                placeholder="xxxxxxxxxxxxxxxxx"
                id="name"
              />
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                name=""
                placeholder="xxxxxxxxxxxxxxxxx"
                id="firstName"
              />
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="maritialStatus">M. status</label>
              <select
                className="form-select-sm w-50"
                name=""
                id="maritialStatus"
              >
                <option value="">Married</option>
                <option value="">Single</option>
              </select>
            </div>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="gender">Gender</label>
              <select className="form-select-sm w-50" name="" id="gender">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          <div className="ms-md-2 mt-sm-4 mt-md-0 contact-info">
            <h3 className="title">
              <b>Contact</b>
            </h3>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                name=""
                id="address"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="number">Number : </label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                name=""
                id="number"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                className="border-less form-control-sm w-50"
                placeholder="xxxxxxxxxxxxxxxxx"
                name=""
                id="email"
              />
            </div>
          </div>
        </section>
        <section className="professional-info-section">
          <DegreeInformation />
          <ExperienceInformation />
        </section>
      </div>
    </>
  );
}

export default Resume;
