import React from "react";

const Diagnostics = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-3xl font-bold">Diagnostic Center</h1>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.finddoctor24.com/wp-content/uploads/2017/10/Oasis-Hospital-Sylhet.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="cafeteria"
          />
          <div>
            <h3 className="text-4xl font-bold">LABAID Diagnostic Sylhet</h3>
            <p className="py-6">
              Address: House-362, 363, New Medical Rd, Sylhet 3100
              <br />
              Phone: 01766-662727
              <br />
              Services: ICU
              <br />
              ENT care
              <br />
              Covid Wing
              <br />
              CCU
              <br />
              Dental Care
              <br />
              <a href="https://labaidgroup.com/diagnostic">
                <button className="btn btn-primary">Visit Site</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;
