import React from 'react';
import veterinarioIMG from '../images/veterinario.png';
import { MDBContainer, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar';

function Contact(){
  return(
  <div>
    <Nav/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
      <MDBCard  id="contact">
        <MDBCardBody className='px-5'>
          <img src={veterinarioIMG} alt="Veterinario1"/>
          <p>Email: veterinario@gmail</p>
          <p>Phone: XXXX-XXXX </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </div>
  );
}

export default Contact;