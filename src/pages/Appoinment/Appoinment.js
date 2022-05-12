import React from 'react';
import Footer from '../Shared/Footer';

import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    return (
        <div>
            <h2>Appoinment</h2>
            <AppoinmentBanner></AppoinmentBanner>
            <AvailableAppoinments></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;