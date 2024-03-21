import React from 'react';
import { MDBContainer} from 'mdb-react-ui-kit';
import DateCalendarValue from '../components/dateCalendar';
import Nav from '../components/NavigationBar'; 

export default function Agenda() {
  return (
    <div>
    <Nav/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
        <DateCalendarValue/>
    </MDBContainer>
    </div>
  );
}