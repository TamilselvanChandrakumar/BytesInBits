import React from "react";
import "../../../components/aboutus/aboutbytesinbits/Aboutbytes.css";
import missionimg from "../../../assets/aboutus/mission.png";
import vissionimg from "../../../assets/aboutus/vision.png";
import aboutbytes from "../../../assets/aboutus/aboutsbytes.png";
const Aboutbytes = () => {
  return (
    <div className="aboutbytesinbits_container">
      <div className="aboutbytesinbits_inner">
        <h1>About Bytes in Bits</h1>
        <p>
          Bytes in Bits Technologies was started by a group of IT professionals
          working in reputed MNCs, who have been experienced in the industry for
          about 10 years. It was initially established in Chennai in 2014, and
          later in 2021, we opened a branch in Electronic City, Bangalore. We
          are passionate engineers, and we understand the knowledge gaps of
          freshers, and enable them as per the current industry needs for
          embedded skills. We are the best software institute in India and the
          favorite institute for advanced embedded systems and full-stack
          development among the students.
        </p>
        <img src={aboutbytes} alt=""></img>
        <p>
          It’s our pleasure, Grooming Freshers & finding them in right place. We
          Don’t Hire Trainers as we love teaching & much excited about seeing
          the results. Some of our alumni from Intel, Qualcomm, Microchip and
          so. We do provide corporate talent development programs that focus on
          Embedded systems design & Linux.
        </p>
        <p>
          Hope people will focus on being specific and specializing in a
          particular skill and there are so many opportunities in this
          industry. For one who wants to start a business, he was suggesting
          that if you think more you can’t act but in life, you have to take
          bold decisions and do experiments before that.
        </p>
        <div className="aboutbytesinbits_card">
          <div>
            <h1>Our Mission</h1>
            <p>
              To be the leading education institute that is passionate about
              empowering individuals by addressing the gap between industry
              expectations and student knowledge, and enabling them to reach
              their full potential, particularly those from humble
              backgrounds. Our ultimate mission is to empower individuals to
              reach their full potential in the growth and development of the
              industry.
            </p>
          </div>
          <img src={missionimg} alt=""></img>
        </div>
        <div className="aboutbytesinbits_card">
          <img src={vissionimg}></img>
          <div>
            <h1>Our Vission</h1>
            <p>
              Our mission is to provide high-quality education and training that
              enables individuals to acquire the skills and knowledge necessary
              to succeed in their careers. We are committed to addressing the
              gap between industry expectations and student knowledge by
              providing comprehensive training and practical experience. We aim
              to create a supportive and inclusive environment that fosters
              continuous learning and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutbytes;
