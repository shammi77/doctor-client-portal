import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div>
           <h4 className='text-xl text-secondary text-center'>Available Appoinments on {format(date, 'PP')}.</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>

        </div>
    );
};

export default AvailableAppoinments;