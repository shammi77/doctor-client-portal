import React from 'react';
import Director1 from './Director1';
import Director2 from './Director2';
const Director = () => {
    return (
        <div className='ml-20 grid sm:grid-cols-1  lg:grid-cols-2 gap-10'>
            <Director1></Director1>
            <Director2></Director2>
        </div>
    );
};

export default Director;