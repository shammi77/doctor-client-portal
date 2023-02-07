import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://www.haramainhospital.com/wp-content/uploads/2016/04/img_0472.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://diffzi.com/wp-content/uploads/2019/11/ccu-vs-icu.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://www.haramainhospital.com/wp-content/uploads/2014/09/emergency-department.jpg"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Carousel;
