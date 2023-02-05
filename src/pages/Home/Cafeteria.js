import React from "react";

const Cafeteria = () => {
  return (
    <div className= "hero min-h-screen bg-base-200">
      <div className= "hero-content flex-col lg:flex-row">
        <img
          src="https://c3.thejournal.ie/media/2019/08/hospital-food-4-752x501.png"
          className= "max-w-sm rounded-lg shadow-2xl"
          alt="cafeteria"
        />
        <div>
          <h1 className= "text-5xl font-bold">CAFETERIA</h1>
          <p className= "py-6">
            Waiting inside a hospital can be exhausting and unsettling. For the
            convenience of our visitors, Al Haramain Hospital has several
            cafeterias scattered across the Hospitals floors to minimize the
            inconvenience of having to move from floor to floor in search of
            snacks and refreshments. Our cafeterias will cater for diverse
            tastes and will enable us to make your stay or visit as refreshing
            as possible. The cafeterias have been designed with the well being
            and health of our patients and visitors in mind and offer a range of
            delicious snacks that are healthy too, in line with our aim of
            encouraging a healthy lifestyle among the community while at the
            same time meeting the diversity in tastes among our valued patrons.
            It is our goal to ensure that Al Haramain Hospital is not just
            another hospital, but a place that is both relaxing and refreshing
            at the same time.
          </p>
          <button className= "btn btn-primary">Order </button>
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
