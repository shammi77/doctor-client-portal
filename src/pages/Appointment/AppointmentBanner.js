import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

// const AppointmentBanner = ({date, setDate}) => {

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
                </div>
            </div>
            
        </div>
        
    );
};

export default AppointmentBanner;