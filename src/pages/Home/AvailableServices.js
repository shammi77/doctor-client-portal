import React from "react";

const AvailableServices = () => {
  return (
    <div className="grid gap-10 m-4">
      <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://c3.thejournal.ie/media/2019/08/hospital-food-4-752x501.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="cafeteria"
          />
          <div>
            <h3 className="text-5xl font-bold">CAFETERIA</h3>
            <p className="py-6">
              Waiting inside a hospital can be exhausting and unsettling. For
              the convenience of our visitors, Al Haramain Hospital has several
              cafeterias scattered across the Hospitals floors to minimize the
              inconvenience of having to move from floor to floor in search of
              snacks and refreshments. Our cafeterias will cater for diverse
              tastes and will enable us to make your stay or visit as refreshing
              as possible. The cafeterias have been designed with the well being
              and health of our patients and visitors in mind and offer a range
              of delicious snacks that are healthy too, in line with our aim of
              encouraging a healthy lifestyle among the community while at the
              same time meeting the diversity in tastes among our valued
              patrons. It is our goal to ensure that Al Haramain Hospital is not
              just another hospital, but a place that is both relaxing and
              refreshing at the same time.
            </p>
            <button className="btn btn-primary">Order </button>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <img
            src="https://v-tecs.org/wp-content/uploads/2018/08/bigstock-Man-And-Woman-Pharmacists-Work-237231235.jpg"
            className= "max-w-sm rounded-lg shadow-2xl"
            alt="medicine"
          />
          <div>
            <h3 className= "text-5xl font-bold">PHARMACY</h3>
            <p className= "py-6">
            We have a pharmacy in the hospital premises which stocks a large range of medicines and provides logistical support to the medicinal needs of our patients. At Al Haramain Hospital, pharmacy staff closely work with physicians and specialists to ensure that the drug requirements of our patients are met. We are committed to providing an adequate supply of safe, effective and good quality drugs consistent with needs of patients. The pharmacy is open 24 hours a day and 7 days a week.
            </p>
            <button className= "btn btn-primary">BUY MEDICINE</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-ambulanceambulanceinjured-peoplefor-an-illness-or-injuryhospital-medicalambulances-17015274053493pgy3.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="cafeteria"
          />
          <div>
            <h3 className="text-5xl font-bold">AMBULANCE</h3>
            <p className="py-6">
              Waiting inside a hospital can be exhausting and unsettling. For
              the convenience of our visitors, Al Haramain Hospital has several
              cafeterias scattered across the Hospitals floors to minimize the
              inconvenience of having to move from floor to floor in search of
              snacks and refreshments. Our cafeterias will cater for diverse
              tastes and will enable us to make your stay or visit as refreshing
              as possible. The cafeterias have been designed with the well being
              and health of our patients and visitors in mind and offer a range
              of delicious snacks that are healthy too, in line with our aim of
              encouraging a healthy lifestyle among the community while at the
              same time meeting the diversity in tastes among our valued
              patrons. It is our goal to ensure that Al Haramain Hospital is not
              just another hospital, but a place that is both relaxing and
              refreshing at the same time.
            </p>
            <button className="btn btn-primary">Book </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AvailableServices;
