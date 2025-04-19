import React, { useState, useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./index.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleLeft() {
    return setCurrentIndex((preIndex) =>
      preIndex === 0 ? sliderData.length - 1 : preIndex - 1
    );
  }
  /* automatically change the image, need to add dynamic effect
  useEffect(() => {
    let imgTimer = setInterval(() => {
      handleLeft();
    }, 5000);
    return () => {
      clearInterval(imgTimer);
    };
  }, []);
 */

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        <img
          src="https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3843442/pexels-photo-3843442.jpeg"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg"
          alt=""
        />
      </div>
      <div className="icons">
        <ArrowBackIosNewOutlinedIcon className="arrow" onClick={handleLeft} />

        <ArrowForwardIosOutlinedIcon
          className="arrow"
          onClick={() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
            );
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
