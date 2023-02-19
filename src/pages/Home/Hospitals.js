import React from "react";

const Hospitals = () => {
  return (
    <div className="">
      <div></div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.finddoctor24.com/wp-content/uploads/2017/10/Oasis-Hospital-Sylhet.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="cafeteria"
          />
          <div>
            <h3 className="text-4xl font-bold">Oasis Hospital</h3>
            <p className="py-6">
              Address: Subhanighat, Bishwa Rd, Sylhet 3100
              <br />
              Phone: 01611-990000
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
              <a href="http://oasishospitalbd.com/">
                <button className="btn btn-primary">Visit Site</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
