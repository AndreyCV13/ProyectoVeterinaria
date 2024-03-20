import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

export default function Home() {

  return (
    <MDBNavbar expand='lg' light bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand color='warning' href='#'>NombreVeterinaria</MDBNavbarBrand>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className="white-text">
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Consultorio</MDBNavbarLink>
            </MDBNavbarItem>



          </MDBNavbarNav>

      </MDBContainer>
    </MDBNavbar>
  );
}