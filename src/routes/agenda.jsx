import React from 'react';
import DateCalendarValue from '../components/component';
import { MDBContainer} from 'mdb-react-ui-kit';

function Agenda() {

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <DateCalendarValue/>
    </MDBContainer>
  );
}

export default Agenda;