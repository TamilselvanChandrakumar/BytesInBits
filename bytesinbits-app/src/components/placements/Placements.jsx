import React from "react";
import "../../components/placements/Placements.css";
import placement1 from "../../assets/placements/placement1.png";
import placement2 from "../../assets/placements/placement2.png";
import placement3 from "../../assets/placements/placement3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Placements = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="placement_title">
        <h1>
          Best Job <span>Placement Training</span> In Bytes in Bits
        </h1>
      </div>
      <div className="placement_card_container ">
        <div className="placement_card_inner slider-container">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
      <div className="placement_content">
        <p>
          We are thrilled to announce that our students have been successfully
          placed at some of the top-level companies. Their expertise and skills
          in the field of Embedded Systems have been recognized by some of the
          leading companies, making us proud. Our Bytes in Bits Placements
          program has played a vital role in helping our students acquire the
          necessary skills and knowledge required to become industry-ready
          professionals. We believe that our strong emphasis on practical
          learning and hands-on experience has helped our students excel in the
          industry, resulting in their success. 
        </p>
        <p>
          We are confident that our upcoming batches of students will also have
          similar success stories to share, and we look forward to continuing
          our efforts in providing the best learning and placement opportunities
          to our students. At Bytes in Bits, we ensure that our students are
          equipped with the latest and most relevant skills required by some of
          the leading companies.
        </p>
      </div>
      <div className="placement_celebration_title">
        <h1>
          Bytes in Bits<span> Celebrations </span>
        </h1>
      </div>
      <div>
        <p>
          Bytes in Bits Institute understands the importance of celebrating
          small occasions and milestones for our happiness. At Bytes in Bits
          Institute,we believe that even small achievements and milestones are
          worth celebrating because they contribute to our overall happiness and
          sense of fulfillment. We celebrate accomplishments such as completing
          a project, passing an exam or certification, and even something as
          simple as showing up regularly to class.
        </p>
      </div>
    </>
  );
};

export default Placements;
