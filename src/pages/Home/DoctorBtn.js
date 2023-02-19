import React from 'react';
import { Link } from 'react-router-dom';

const DoctorBtn = () => {
    return (
        <div className='m-5  flex justify-center items-center'>
          <Link to='appointment'> <button className="btn btn-secondary text-white font-bold">Find a Doctor +</button></Link>
         <Link to='mediciens'> <button className="m-5 btn btn-secondary text-white">PHARMACY</button></Link> 
        </div>
    );
};

export default DoctorBtn;