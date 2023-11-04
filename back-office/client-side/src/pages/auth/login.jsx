import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
const logo = require('../../assets/images/HR.jpg');
function LogIn() {

  return (
    <MDBContainer fluid className="p-5 mt-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6' className='pt-4'>
          <img src={logo} className="img-fluid mt-5" alt="Logo HR" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center mt-4">

            <h1 className="lead fw-normal mb-0 me-3">Sign in</h1>

          </div>

          <MDBInput className='mt-5' wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-5' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className='d-flex justify-content-end text-md-start mt-5 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
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