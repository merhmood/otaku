import React from "react";

const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <div onClick={moveSlide} className={direction === "next" ? "next" : "prev"}>
      <img
        src={
          direction === "next"
            ? `${process.env.PUBLIC_URL}right-chevron.png`
            : `${process.env.PUBLIC_URL}left-chevron.png`
        }
        alt=""
      />
    </div>
  );
};

export default BtnSlider;
