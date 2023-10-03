import React, { useState } from "react";
import CarouselContent from "./CarouselContent";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Carousel = ({ images }) => {
  console.log(images);
  const [currentTndex, setCurrentIndex] = useState(0);
  //console.log(images.length);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      prevIndex + 1 === images.length ? 0 : prevIndex + 1;
    });
  };
  //console.log(currentTndex);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  //console.log(images[1].url);
  return (
    <div className="carousel">
        <img 
        key={currentTndex}
        src={images[currentTndex]}/>
      
      <div className="slide_direction">
        <div className="left" onClick={handlePrev}>
          <FiChevronLeft />
        </div>
        <div className="right" onClick={handleNext}>
          <FiChevronRight />
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index)=>{
            <div
            key={index}
            className={`dot ${currentTndex === index ? 'active':""}`}
            onClick={()=>handleDotClick(index)}>
            </div>
        })}
      </div>
    </div>
  );
};

export default Carousel;
