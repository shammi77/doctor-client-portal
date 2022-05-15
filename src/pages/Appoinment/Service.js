import React from "react";

const Service = ({ service }) => {
    const {name, slots} = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>

        <p>
            {
                slots.length > 0
                ? <span>{slots[0]}</span>
                : <span className="text-red-500">No slot Available</span>
            }
        </p>
        <p>{slots.length} spaces Available</p>
        <div class="card-actions justify-center">
          <button disabled={slots.length===0} class="btn btn-secondary text-white uppercase">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
