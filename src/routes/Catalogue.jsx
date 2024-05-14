import React, { useState } from 'react';
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
  // Flag
  const [toggleFlag, setToggle] = useState(false);

  // Function to toggle button text
  const toggleButtonText = () => {
    setToggle(!toggleFlag);
  };

  return(
    <div>
      <Nav/>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
        <MDBCard  id="contact">
          <MDBCardBody className='px-5'>
            <div className="left">
              <img src={comidaIMG} alt="comida1"/>
              <p>Comida para Perros Marca GUAUS </p>
              <p>Precio: $ 3 </p>
              <MDBBtn
                className='mb-4 w-100 gradient-custom-4'
                size='lg'
                onClick={toggleButtonText}
              >
                {toggleFlag ? "Quitar del Carrito" : "Añadir al Carrito"}
              </MDBBtn>
            </div>
            <div className="right">
              <img src={jugueteIMG} alt="juguete1"/>
              <p>Paquete de Juguetes para Mascotas </p>
              <p>Precio: $ 10 </p>
              <MDBBtn
                className='mb-4 w-100 gradient-custom-4'
                size='lg'
                onClick={toggleButtonText}
              >
                {toggleFlag ? "Quitar del Carrito" : "Añadir al Carrito"}
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Catalogue;
