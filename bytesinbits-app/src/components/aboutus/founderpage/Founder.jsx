import React, { useEffect } from "react";
import founderimg from "../../../assets/courses/founderimg.png";
import "../founderpage/Founder.css";
import AOS from "aos";
import "aos/dist/aos.css";
export const Founder = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <section className="founder_container">
        <div className="founder_inner">
          <div className="founder_image_content">
            <div className="founder_title">
              <h2>
                Founders <span>Forge</span>{" "}
              </h2>
              <h3>
                {" "}
                Futures From <span> Dreams</span>
              </h3>
              <p data-aos="fade-up">
                Muniraj Muniappan, cofounder of bytes-in-bits technology.
                Bytes-in-bits is a software training institution; apart from
                that, it works for the placement opportunity for the students.
                He just attended all the off-campus openings that were taking
                place in Bangalore. But he couldn’t get an opportunity. His
                mother wanted him to take care of the family business. He
                doesn’t want to engage in his business since he struggled & to
                gain a graduate degree. 
              </p>
            </div>
            <div className="founder_image_container" data-aos="fade-up">
              <img src={founderimg} alt="founder_image"></img>
            </div>
          </div>
          <div className="founder_content" data-aos="fade-up">
            <p>
              After 8 months, he joined as a hardware engineer. After a week
              that he realized that anyone can do the job. No such qualification
              is required. He found out there won’t be much change in his career
              and he was planning and he was spoken to the lead manager, MD. He
              don’t get any positive reply & he made the protest to
              relieve.After a few months, he quit the job. He didn’t know what
              to do the work but he realized to upskill himself for a better
              future.He had spoken to him and he was planning to join the
              embedded system consisting of 6 members. They have gone 7 months
              for the embedded system course. That embedded course has gone
              well. From the 5th month, they started attending an interview.
              While attending interviews, they can clear up to 2-3 rounds. This
              created confidence to move ahead in the industry of software.
            </p>
            <p data-aos="fade-up">
              Yogeshwaran and Muniraj joined a small startup company. After
              joining the company, they came to know that there is a small gap
              between students’ skills and the company’s expectations. Training
              institution acts as a bridge to fill both students’ skills by
              giving them training with respect to the company’s expectations.
              After so many struggles they started BYTES in BITS.Finally, for
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
