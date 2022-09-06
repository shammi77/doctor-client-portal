// import React, { useState } from 'react';
import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
// import AvailableAppointments from './AvailableAppointments';


const Appointment = () => {
 
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            {/* <AvailableAppointments date={date}></AvailableAppointments> */}
            <Footer></Footer>
        </div>
    );
};

export default Appointment;