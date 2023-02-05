import React from 'react';

const Pharmacy = () => {
    return (
        <div className= "hero min-h-screen bg-base-200">
        <div className= "hero-content flex-col lg:flex-row">
          <img
            src="https://v-tecs.org/wp-content/uploads/2018/08/bigstock-Man-And-Woman-Pharmacists-Work-237231235.jpg"
            className= "max-w-sm rounded-lg shadow-2xl"
            alt="medicine"
          />
          <div>
            <h1 className= "text-5xl font-bold">PHARMACY</h1>
            <p className= "py-6">
            We have a pharmacy in the hospital premises which stocks a large range of medicines and provides logistical support to the medicinal needs of our patients. At Al Haramain Hospital, pharmacy staff closely work with physicians and specialists to ensure that the drug requirements of our patients are met. We are committed to providing an adequate supply of safe, effective and good quality drugs consistent with needs of patients. The pharmacy is open 24 hours a day and 7 days a week.
            </p>
            <button className= "btn btn-primary">BUY MEDICINE</button>
          </div>
        </div>
      </div>
    );
};

export default Pharmacy;