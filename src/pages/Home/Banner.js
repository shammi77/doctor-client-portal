import React from "react";
import DoctorBtn from "./DoctorBtn";

const Banner = () => {
  return (
    <div className=" w-full">
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/happy-medical-team-using-laptop-together_13339-250352.jpg?w=996" className="w-full mt-10" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?size=626&ext=jpg&ga=GA1.2.96353961.1675953229&semt=sph" className="w-full" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?size=626&ext=jpg&ga=GA1.2.96353961.1675953229&semt=sph" className="w-full" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/group-doctors-nurses-standing-hospital-roomthe-concept-health_252847-11817.jpg?size=626&ext=jpg&ga=GA1.2.96353961.1675953229&semt=sph" className="w-full" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      <div><DoctorBtn></DoctorBtn></div>
      
      </div>
  );
};

export default Banner;
