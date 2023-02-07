import React from 'react';
import { Link } from 'react-router-dom';

const Director2 = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure className="px-10 pt-10">
          <img
            src="https://www.haramainhospital.com/wp-content/uploads/2016/04/oliur-rahman-1.jpg"
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="m-4">
          <h2 className="text-center font-bold">MOHAMMED OLIUR RAHMAN</h2>
          <h5 className="text-center text-primary font-bold">VICE CHAIRMAN</h5>
          <p className="text-center">Healthcare has fast become an integral part of modern day life. In a fast changing world, the medical field has become not just….</p>
          <div className="text-center m-5">
          <Link to='/director2details'> <button className="text-center btn btn-primary">Read More</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Director2;