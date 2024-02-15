import React from "react";
import "../../components/placements/Placements.css";
import placement1 from "../../assets/placements/placement1.png";
import placement2 from "../../assets/placements/placement2.png";
import placement3 from "../../assets/placements/placement3.png";
import celebration1 from "../../assets/placements/celebration1.png";
import celebration2 from "../../assets/placements/celebration2.png";
import celebration3 from "../../assets/placements/celebration3.png";
import youtube from "../../assets/placements/youtube.png";
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
      <header className="placement_header">
        <div className="placement_header_background">
          <h1>Placement Training</h1>
          <h3>Your human talent is your most important talent.</h3>
          <div>
            <p>“Doing the best at this moment puts you in the best place</p>
            <p>for the next moment.”</p>
          </div>
        </div>
      </header>
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
      <div className="placement_celebration_content">
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
      <div className="celebration_imgage_container">
        <div className="celebration_image_inner">
          <div className="celebration_img">
            <img src={celebration1} alt=""></img>
          </div>
          <div className="celebration_img">
            <img src={celebration2} alt=""></img>
          </div>
          <div className="celebration_img">
            <img src={celebration3} alt=""></img>
          </div>
        </div>
      </div>
      <div className="testimonial_title">
        <h1>
          <span>Testimonials </span>& Mock Interview
        </h1>
      </div>
      <div className="testimonial_content">
        <p>
          Bytes in Bits Institute has been helping individuals people to enhance
          their technical and professional skills for the past two decades.
          Their dedication to providing high-quality education and practical
          training has earned them numerous positive testimonials from satisfied
          students who have successfully landed their dream jobs. Here are some
          testimonials from happy students as well as Mock Interviews.
        </p>
      </div>
      <div className="youtube_container">
        <div className="youtube_inner">
          <a href="">
            <div className="youtube_card">
              <h3>Moke Interview by Founder....</h3>
              <div className="youtube_image">
                <img src={youtube} alt=""></img>
              </div>
            </div>
          </a>
          <a href="">
            <div className="youtube_card">
              <h3>Sandheep review about by....</h3>
              <div className="youtube_image">
                <img src={youtube} alt=""></img>
              </div>
            </div>
          </a>
          <a href="">
            <div className="youtube_card">
              <h3>Karthi Review about bytes....</h3>
              <div className="youtube_image">
                <img src={youtube} alt=""></img>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Placements;
