import React from "react";
import Bod from "./Bod";
import Intro from "./Intro";
import Mission from "./Mission";
import Vision from "./Vision";
import Director from "./Director";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div className="mb-10">
      <h1 className=" font-bold text-4xl m-6">Know More About US</h1>
      <hr />
      <Intro></Intro>
      <Vision></Vision>
      <Mission></Mission>
      <Bod></Bod>
      <hr />
      <Director></Director>
      <Carousel></Carousel>
    </div>
  );
};

export default About;

