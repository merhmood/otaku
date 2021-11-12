import React, { useState } from "react";
import BtnSlider from "./BtnSlider";

const Slider = ({ data }) => {
  const sliderArray = data;
  const [presentSlide, setPresentSlide] = useState(0);
  const sliderDetails = setTimeout(() => {
    if (presentSlide !== sliderArray.length - 1) {
      setPresentSlide(presentSlide + 1);
    } else {
      setPresentSlide(0);
    }
  }, 4000);
  const prevSlide = () => {
    if (presentSlide > 0) {
      setPresentSlide(presentSlide - 1);
      clearInterval(sliderDetails);
    } else {
      setPresentSlide(sliderArray.length - 1);
      clearInterval(sliderDetails);
    }
  };
  const nextSide = () => {
    if (presentSlide !== sliderArray.length - 1) {
      setPresentSlide(presentSlide + 1);
      clearInterval(sliderDetails);
    } else {
      setPresentSlide(0);
      clearInterval(sliderDetails);
    }
  };

  return (
    <div className="slider">
      {sliderArray.map((obj, index) => {
        console.log(index);
        return (
          <div className={presentSlide === index ? "slide-active" : "slide"}>
            <img src={obj.img} alt="" className="slider-img" />
            <div className={presentSlide === index ? "text-active" : "text"}>
              <h2>{obj.header}</h2>
              <p>{obj.paragraph}</p>
              <p>
                {obj.paragraphOne !== "" && index !== 3
                  ? `Date:   ${obj.paragraphOne}`
                  : ""}
              </p>
              <br />
              <p>
                {obj.paragraphTwo !== ""
                  ? `Location:   ${obj.paragraphTwo}`
                  : ""}
              </p>
              <br />
              <p>
                {obj.paragraphThree !== ""
                  ? `Time:   ${obj.paragraphThree}`
                  : ""}
                {}
              </p>
              <button>{obj.btn}</button>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      <BtnSlider moveSlide={nextSide} direction="next" />
    </div>
  );
};

export default Slider;
