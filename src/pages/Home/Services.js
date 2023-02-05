import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
{
    _id:1,
    name:'AMBULANCE SERVICE',
    description:'Having a medical emergency can be a very frightening and critical experience. Our Hospital recognizes this and has equipped its Emergency Response Unit with ambulances that can be dispatched immediately following an emergency call.',
    img: 'https://www.freepnglogos.com/uploads/ambulance-png/ambulance-quot-touch-truck-quot-community-event-temecula-education-16.png'
},
{
    _id:2,
    name:'PHARMACY',
    description:'We have a pharmacy in the hospital premises which stocks a large range of medicines and provides logistical support to the medicinal needs of our patients.',
    img:'https://w7.pngwing.com/pngs/785/135/png-transparent-green-cross-logo-pharmacy-computer-icons-health-care-pharmacy-text-logo-symmetry-thumbnail.png'
},
{
    _id:3,
    name:'CAFETERIA',
    description:'For the convenience of our visitors, Al Haramain Hospital has several cafeterias scattered across the Hospitals floors to minimize the inconvenience of having to move from floor to floor in search of snacks and refreshments.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsCGumAcbD--ZXXgybbLk-cvKVzPr70j85w&usqp=CAU'
}
    ];

    return (
        <div className="my-20">
            <div className="text-center">
            <h3 className="text-primary text-2xl font-bold uppercase">services</h3>
            <h2 className="text-4xl">Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service =><Service
                        key={service._id}
                        service={service}
                        ></Service>)
                    }
            </div>
        </div>
    );
};

export default Services;