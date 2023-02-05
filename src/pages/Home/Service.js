import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Shared/PrimaryButton";




const Service = ({ service}) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img  src={service.img} alt="" className="rounded-xl w-100" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <Link id="cafeteria" to='services'><PrimaryButton >Get Started</PrimaryButton></Link>

      </div>
    </div>
  );
};

export default Service;
