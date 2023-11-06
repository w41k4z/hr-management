import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "../../http-client-side/Axios";
import logo from "../../assets/images/HR.jpg";


function LogIn() {
  const navigate = useNavigate();
  const [credential, setCredential] = useState(
    {}
  );
  const log = async () => {
    await axios.post("http://localhost:8080/Account/login", credential).then((res) => { console.log(res); return res.data }).then((data) => {
      if (data && data.userName) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/department/needs");
      } else {
        alert("Wrong user name or password");
      }
    }).catch((err) => {
      alert(err)
    });
  };

  return (
    <MDBContainer fluid className="p-5 mt-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6" className="pt-4">
          <img src={logo} className="img-fluid mt-5" alt="Logo HR" />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center mt-4">
            <h1 className="lead fw-normal mb-0 me-3">Sign in</h1>
          </div>

          <MDBInput
            className="mt-5"
            wrapperClass="mb-4"
            label="User name"
            id="formControlLg"
            type="text"
            onChange={(e) => setCredential({ ...credential, userName: e.target.value })}
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-5"
            label="Password"
            id="formControlLg"
            type="password"
            onChange={(e) => setCredential({ ...credential, password: e.target.value })}
            size="lg"
          />

          <div className="d-flex justify-content-end text-md-start mt-5 pt-2">
            <button className="btn btn-primary mb-0 px-5" onClick={() => { log() }}>
              Login
            </button>
          </div>
        </MDBCol>
      </MDBRow>

      <div className="mt-5 d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
      </div>
    </MDBContainer>
  );
}

export default LogIn;
