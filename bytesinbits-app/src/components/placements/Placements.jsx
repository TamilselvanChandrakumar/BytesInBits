import React from "react";
import "../../components/placements/Placements.css";
import placement1 from "../../assets/placements/placement1.png";
import placement2 from "../../assets/placements/placement2.png";
import placement3 from "../../assets/placements/placement3.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const Placements = () => {
  let box = document.querySelector(".placement_card_container");
  const prevbtnclick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const nextbtnclick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <>
      <div className="placement_card_carousel">
        <button className="pre_btn" onClick={prevbtnclick}>
          <MdArrowForwardIos />
        </button>
        <button className="next-btn" onClick={nextbtnclick}>
          <MdArrowBackIos />
        </button>
        <div className="placement_card_container">
          <div className="placement_card ">
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
        </div>
      </div>
    </>
  );
};

export default Placements;
