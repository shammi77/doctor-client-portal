import React from 'react';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
{
    _id:1,
    name:'Flouride Treatment',
    description:'',
    img: flouride
},
{
    _id:2,
    name:'Cavity Filling',
    description:'',
    img: cavity
},
{
    _id:3,
    name:'Teeth whitening',
    description:'',
    img: whitening
}
    ];

    return (
        <div className="my-20">
            <div className="text-center">
            <h3 className="text-primary text-xl font-bold uppercase">services</h3>
            <h2>Services we provide</h2>
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