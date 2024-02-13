import React from "react";
import "../../components/aboutus/Aboutus.css";
import aboutusheader from "../../assets/aboutus/aboutusheader.png";
import founderimg from "../../assets/courses/founderimg.png";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus_header">
        <div className="aboutus_header_image">
          <img src={aboutusheader} alt=""></img>
        </div>
        <div className="aboutus_header_content">
          <p>
            Empowering Journeys,<span>Inspiring Connections</span>{" "}
          </p>
          <p>
            Welcome to Our <span> Narrative of Excellence.</span>
          </p>
        </div>
        <div className="aboutus_footer_content">
          {" "}
          <p>About Business</p>
        </div>
      </div>
      <section className="aboutus_nav_container">
        <nav className="aboutus_nav_inner">
          <ul>
            <li>
              {" "}
              <Link>Admission</Link>
            </li>
            <li>
              {" "}
              <Link>Founder & Chairman</Link>
            </li>
            <li>
              <Link>About Bytes in bits</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="founder_container">
        <div className="founder_inner">
          <div className="founder_image_content">
            <div>
              <h2>Founders Forge</h2>
              <h2> Futures From Dreams</h2>
              <p>
                            Muniraj Muniappan, cofounder of bytes-in-bits
                technology. Bytes-in-bits is a software training institution;
                apart from that, it works for the placement opportunity for the
                students. He just attended all the off-campus openings that were
                taking place in Bangalore. But he couldn’t get an opportunity.
                His mother wanted him to take care of the family business. He
                doesn’t want to engage in his business since he struggled & to
                gain a graduate degree. 
              </p>
            </div>
            <div className="founder_image_container">
              <img src={founderimg} alt="founder_image"></img>
            </div>
          </div>
          <div className="founder_content">
            <p>
                   After 8 months, he joined as a hardware engineer. After a
              week that he realized that anyone can do the job. No such
              qualification is required. He found out there won’t be much change
              in his career and he was planning and he was spoken to the lead
              manager, MD. He don’t get any positive reply  & he made the
              protest to relieve.  After a few months, he quit the job. He
              didn’t know what to do the work but he realized to upskill himself
              for a better future. He had spoken to him and he was planning to
              join the embedded system consisting of 6 members. They have gone 7
              months for the embedded system course. That embedded course has
              gone well. From the 5th month, they started attending an
              interview. While attending interviews, they can clear up to 2-3
              rounds. This created confidence to move ahead in the industry of
              software.
            </p>
            <p>
              Yogeshwaran and Muniraj joined a small startup company. After
              joining the company, they came to know that there is a small gap
              between students’ skills and the company’s expectations. Training
              institution acts as a bridge to fill both students’ skills by
              giving them training with respect to the company’s expectations.
              After so many struggles they started BYTES in BITS. Finally, for
              the people who are seeking a job, Muniraj muniappan wanted to say
              that the companies who are hiring are not expecting the freshers
              to be an expert in all the subjects that they have studied in
              academics. Companies are expecting candidates to be good knowledge
              of anyone specialized thing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
