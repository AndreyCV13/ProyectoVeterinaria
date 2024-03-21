import React from 'react';
import comidaIMG from '../images/comida_perro.png';
import jugueteIMG from '../images/juguete_perro.png';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

function Catalogue(){
  return(
  <MDBContainer fluid className='d-flex align-items-center justify-content-right'>
    <div className='mask gradient-custom-3' id="colorRegister"></div>
    <MDBCard className='d-flex'>
      <MDBCardBody className='px-5 catalog'>
        <img src={comidaIMG} alt="comida1" className='img-fluid'/>
        <p>Comida para Perros Marca XXXXX </p>
        <p>Precio: $ XXXX </p>
        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Hacer comprar</MDBBtn>
      </MDBCardBody>
      <MDBCardBody className='px-5 catalog'>
        <img src={jugueteIMG} alt="juguete1" className='img-fluid'/>
        <p>Paquete de Juguetes para Mascotas </p>
        <p>Precio: $ XXXX </p>
        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Hacer comprar</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  );
}

export default Catalogue;