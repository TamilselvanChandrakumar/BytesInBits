import React from "react";
import "../../components/placements/Placements.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placement1 from "../../assets/placements/placement1.png";
import placement2 from "../../assets/placements/placement2.png";
import placement3 from "../../assets/placements/placement3.png";
const Placements = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="placement_card_container slider-container">
        <Slider {...settings}>
          <div className="placement_card">
            <img src={placement1} alt=""></img>
          </div>
          <div className="placement_card">
            <img src={placement2} alt=""></img>
          </div>
          <div className="placement_card">
            <img src={placement3} alt=""></img>
          </div>
          <div className="placement_card">
            <img src={placement2} alt=""></img>
          </div>
          <div className="placement_card">
            <img src={placement3} alt=""></img>
          </div>
          <div className="placement_card">
            <img src={placement1} alt=""></img>
          </div>
          <div className="placement_card">
            <img src={placement2} alt=""></img>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Placements;
