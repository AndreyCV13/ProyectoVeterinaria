import React from 'react';
import veterinarioIMG from '../images/veterinario.png';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

function Contact(){
  return(
  <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
    <div className='mask gradient-custom-3' id="colorRegister"></div>
    <MDBCard  id="contact">
      <MDBCardBody className='px-5'>
        <img src={veterinarioIMG} alt="Veterinario1"/>
        <p>Email: veterinario@gmail</p>
        <p>Phone: XXXX-XXXX </p>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  );
}

export default Contact;