import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import DateCalendarValue from '../components/dateCalendar';
import Nav from '../components/NavigationBar'; 

export default function Agenda() {
  return (
    <div>
        <Nav/>
        <DateCalendarValue/>
    </div>
  );
}