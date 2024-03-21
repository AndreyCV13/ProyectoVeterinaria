import React from 'react';
import comidaIMG from '../images/comida_perro.png';
import jugueteIMG from '../images/juguete_perro.png';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 

function Catalogue(){
  return(
  <div>
    <Nav/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
      <MDBCard  id="contact">
        <MDBCardBody className='px-5'>
        <div className="left">
          <img src={comidaIMG} alt="comida1"/>
          <p>Comida para Perros Marca XXXXX </p>
          <p>Precio: $ XXXX </p>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Hacer comprar</MDBBtn>
        </div>
        <div className="right">
          <img src={jugueteIMG} alt="juguete1"/>
          <p>Paquete de Juguetes para Mascotas </p>
          <p>Precio: $ XXXX </p>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Hacer comprar</MDBBtn>
        </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </div>
  );
}

export default Catalogue;