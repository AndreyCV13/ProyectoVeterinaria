import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import '../css/Home.css';

export default function Nav() {

  return (
    <MDBNavbar expand='lg' light bgColor='dark' color="indigo">
      <MDBContainer fluid>
        <MDBNavbarBrand color='warning' href='./Home' id="colorTexto">NombreVeterinaria</MDBNavbarBrand>

          <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>

            <MDBNavbarItem className='mx-3'>
              <MDBNavbarLink active aria-current='page' href='./Home' id="colorTexto"> Home </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='mx-3'>
              <MDBNavbarLink href='./Agenda' id="colorTexto">Agenda</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='mx-3'>
              <MDBNavbarLink href='#' id="colorTexto">Consultorio</MDBNavbarLink>
            </MDBNavbarItem>



          </MDBNavbarNav>

      </MDBContainer>
    </MDBNavbar>
  );
}