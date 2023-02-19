import React from "react";

const Paramedics = () => {
  return (
  
    <div>
        
        <div>
          <h1 className="text-3xl font-bold">Ambulance</h1>
          <p>Click the Buttons to </p>
          <p className="py-6">
            <div>
          <button className="btn btn-primary m-5" onClick={() =>  navigator.clipboard.writeText('999')}>Bangladesh Hotline</button></div>
          <div>
          <button className="btn btn-primary m-5" onClick={() =>  navigator.clipboard.writeText('+880 1721-520585')}>Sylhet Ambulance Service</button></div>  
          <div>
          <button className="btn btn-primary m-5" onClick={() =>  navigator.clipboard.writeText('0821-713728')}>Sylhet Masum Enterprise Ambulance Service</button></div>  
          <div>
          <button className="btn btn-primary m-5" onClick={() =>  navigator.clipboard.writeText('821-812626')}>Sylhet AL-Madina Ambulance Service</button></div>  
          <div>
          <button className="btn btn-primary m-5" onClick={() =>  navigator.clipboard.writeText('0821-713506')}>Sylhet Sylhet Sadar Hospital Ambulance Service</button></div>  

          </p>
          
        </div>
      </div>
  
  );
};

export default Paramedics;