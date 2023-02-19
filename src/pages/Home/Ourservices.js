import React from "react";
import { Link } from "react-router-dom";

const Ourservices = () => {
  return (
    <div className="grid gap-10 m-4">
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://c3.thejournal.ie/media/2019/08/hospital-food-4-752x501.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="cafeteria"
        />
        <div>
          <h3 className="text-5xl font-bold">HOSPITALS</h3>
          <p className="py-6">
          Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, 
          both medical and surgical, of the sick and the injured; and for their housing during this process. 
          The modern hospital also often serves as a centre for investigation and for teaching.
            Search for a Hospital
          </p>
          <Link to="/hospitals">
          <button className="btn btn-primary">BROWSE </button></Link>
        </div>
      </div>
    </div>
    </div>
    
  <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-ambulanceambulanceinjured-peoplefor-an-illness-or-injuryhospital-medicalambulances-17015274053493pgy3.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="cafeteria"
        />
        <div>
          <h3 className="text-3xl font-bold">AMBULANCE</h3>
          <p className="py-6">
          An ambulance is a vehicle equipped to provide emergency care to sick or injured people and to get them to hospital. 
          Medical help is not always readily available in one's own home or at the site of an unfortunate accident. 
          An ambulance is the fastest and safest method of transporting a patient to a hospital.
          They are all specially equipped to provide immediate first aid 
          and life support to sustain the patient till they reach a real medical center.
          </p>
          <Link to="/paramedics">
          <button className="btn btn-primary">Call</button></Link>
        </div>
      </div>    
    </div>
    </div>
    <div><div className="grid gap-10 m-4">
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://diagnosticsmarketing.net/blog/wp-content/uploads/2019/03/visitprep02.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="cafeteria"
        />
        <div>
          <h3 className="text-5xl font-bold">Diagnostics</h3>
          <p className="py-6">
            Sometimes finding someone's affliction is half the problem. Most people are not able to identify symptoms. 
            That is what diagnostic centers are for. These centres are equipped with the required laboratory equipments 
            and trained staff along with medical personnel that assist them in the process of identifying diseases in a patient. 
            Search for a Diagnostic Center
          </p>
          <Link to="/diagnostics">
          <button className="btn btn-primary">BROWSE </button></Link>
        </div>
      </div>
    </div>
    </div></div>
  </div>
  </div>
  );
};

export default Ourservices;
