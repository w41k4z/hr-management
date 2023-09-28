import React from "react";
import DegreeInformation from "../../components/degree-info/DegreeInformation";
import ExperienceInformation from "../../components/experience-info/ExperienceInformation";

function Resume() {
  return (
    <>
      <h2 className="card-title ms-2">Resume Form</h2>
      <div className="card-body">
        <section className="personal-info-section d-flex flex-md-row flex-sm-column flex-wrap justify-content-between">
          <div className="public-info">
            <h3>
              <b>CV</b>
            </h3>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control-sm w-50"
                name=""
                id="name"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control-sm w-50"
                name=""
                id="firstName"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="maritialStatus">Maritial status</label>
              <input
                type="text"
                className="form-control-sm w-50"
                name=""
                id="maritialStatus"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="gender">Gender</label>
              <select className="form-select-sm w-50" name="" id="gender">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          <div className="contact-info">
            <h3>
              <b>Contact</b>
            </h3>
            <div className="mt-3 input-group justify-content-between">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                className="form-control-sm w-50"
                name=""
                id="address"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="number">Phone Number : </label>
              <input
                type="text"
                className="form-control-sm w-50"
                name=""
                id="number"
              />
            </div>
            <div className="mt-2 input-group justify-content-between">
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                className="form-control-sm w-50"
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
