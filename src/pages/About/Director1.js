import React from "react";
import { Link } from "react-router-dom";

const Director1 = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5">
      <figure className="px-10 pt-10">
        <img
          src="https://www.haramainhospital.com/wp-content/uploads/bfi_thumb/boss-nbvuvsubpbhz77szbi1tu3xv8cn6xn0r46yl5hu94w.jpg"
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="m-4">
        <h2 className="text-center  font-bold">MOHAMMED MAHTABUR RAHMAN (NASIR)</h2>
        <h5 className="text-center text-primary font-bold">CHAIRMAN</h5>
        <p className="text-center">Sylhet is situated in the North Eastern part of Bangladesh, and has witnessed a dearth of modern medical care infrastructure….</p>
        <div className="text-center m-5">
         <Link to='/director1details'> <button className="text-center btn btn-primary">Read More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Director1;
