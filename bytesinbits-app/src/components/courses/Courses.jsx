import React, { useEffect, useState } from "react";
import "../courses/Courses.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import line from "../../assets/courses/line.png";
import duration from "../../assets/allcoursesimg/duration.png";
import enroll from "../../assets/allcoursesimg/enroll.png";
import liveimg from "../../assets/allcoursesimg/live.png";
import rating from "../../assets/allcoursesimg/ratingstar.png";
import downloadimg from "../../assets/allcoursesimg/download.png";
import lms from "../../assets/buildimg/lms.png";
import hrms from "../../assets/buildimg/hrms.png";
import crm from "../../assets/buildimg/lms.png";
import buildimg from "../../assets/buildimg/buildproject.png";
import viewimg from "../../assets/buildimg/viewcourses.png";
import nextarrow from "../../assets/buildimg/nextarrow.png";
import courseworld from "../../assets/courses/course_world.png";
import github from "../../assets/getjobimg/github.png";
import linkedin from "../../assets/getjobimg/linkedin.png";
import resume from "../../assets/getjobimg/resume.png";
import helpapply from "../../assets/getjobimg/helpapply.png";
import docimg from "../../assets/keyfeatures/docimg.png";
import lightning from "../../assets/keyfeatures/lightning.png";
import star from "../../assets/keyfeatures/star.png";

const Courses = () => {
  const [counterOn, seCountertOn] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div className="course_header_container">
        <h2>Bangalore #1 Training Institute</h2>
        <h1>
          Learn Trending <span>Courses</span>{" "}
        </h1>
        <div>
          <p>
            50,000+ uplifted through our hybrid classroom & online training,{" "}
          </p>
          <p>enriched by real-time projects and job support.</p>
        </div>
      </div>
      <div className="course_explore">
        <h3>Explore the Digital Lync way</h3>
      </div>
      <div className="course_division">
        <div>
          <img src={line} alt=""></img>
        </div>
        <h5>1</h5>
        <h3>Learn</h3>
        <p>Experience the New way of Learning with AI </p>
        <p>
          {" "}
          Digital Lync offers best technologies in the work, Curated for your
          Career
        </p>
      </div>
      <div className="courses_allcourses">
        <h1>All Courses</h1>
      </div>
      <section className="allcourses_container">
        <div className="allcourses_inner">
          <div className="individual_course" data-aos="fade-up">
            <h3>Python</h3>
            <div className="individual_course_details">
              <p>
                {" "}
                <img src={duration} alt=""></img>2 Months
              </p>
              <p>
                <img src={liveimg} alt=""></img> 5 Live Projects
              </p>
              <p>
                <img src={rating} alt=""></img> 4.8/5
              </p>
            </div>
            <p className="individual_course_content">
              Python training emphasises on programming concepts and developing
              applications using Python's user-friendly syntax.
            </p>
            <div className="individual_course_button">
              <button className="curriculam_btn">
                <img src={downloadimg} alt=""></img> Curriculum
              </button>
              <button className="enrollnow_btn">
                <img src={enroll} alt=""></img>Enroll Now
              </button>
            </div>
          </div>
          <div className="individual_course" data-aos="fade-up">
            <h3>Data Science</h3>
            <div className="individual_course_details">
              <p>
                {" "}
                <img src={duration} alt=""></img>2 Months
              </p>
              <p>
                <img src={liveimg} alt=""></img> 5 Live Projects
              </p>
              <p>
                <img src={rating} alt=""></img> 4.7/5
              </p>
            </div>
            <p className="individual_course_content">
              AWS training focuses on cloud computing with core services,
              architecture, security, and best practices.
            </p>
            <div className="individual_course_button">
              <button className="curriculam_btn">
                <img src={downloadimg} alt=""></img> Curriculum
              </button>
              <button className="enrollnow_btn">
                <img src={enroll} alt=""></img>Enroll Now
              </button>
            </div>
          </div>
          <div className="individual_course" data-aos="fade-up">
            <h3>Embedded</h3>
            <div className="individual_course_details">
              <p>
                {" "}
                <img src={duration} alt=""></img>2 Months
              </p>
              <p>
                <img src={liveimg} alt=""></img>6 Live Projects
              </p>
              <p>
                <img src={rating} alt=""></img> 4.9/5
              </p>
            </div>
            <p className="individual_course_content">
              Java training focuses on programming basics, OOP, data structures,
              APIs, and app development.
            </p>
            <div className="individual_course_button">
              <button className="curriculam_btn">
                <img src={downloadimg} alt=""></img> Curriculum
              </button>
              <button className="enrollnow_btn">
                <img src={enroll} alt=""></img>Enroll Now
              </button>
            </div>
          </div>
          <div className="individual_course" data-aos="fade-up">
            <h3>IOT</h3>
            <div className="individual_course_details">
              <p>
                {" "}
                <img src={duration} alt=""></img>2 Months
              </p>
              <p>
                <img src={liveimg} alt=""></img> 5 Live Projects
              </p>
              <p>
                <img src={rating} alt=""></img>4.8/5
              </p>
            </div>
            <p className="individual_course_content">
              React JS training covers UI building, component architecture,
              state management, hooks, and modern practices.
            </p>
            <div className="individual_course_button">
              <button className="curriculam_btn">
                <img src={downloadimg} alt=""></img>Curriculum
              </button>
              <button className="enrollnow_btn">
                <img src={enroll} alt=""></img>Enroll Now
              </button>
            </div>
          </div>
          <div className="individual_course" data-aos="fade-up">
            <h3>Cloud Computing</h3>
            <div className="individual_course_details">
              <p>
                {" "}
                <img src={duration} alt=""></img>2 Months
              </p>
              <p>
                <img src={liveimg} alt=""></img> 5 Live Projects
              </p>
              <p>
                <img src={rating} alt=""></img> 4.9/5
              </p>
            </div>
            <p className="individual_course_content">
              Salesforce training focuses on CRM software, Salesforce platform
              functionality, data management and application development.
            </p>
            <div className="individual_course_button">
              <button className="curriculam_btn">
                <img src={downloadimg} alt=""></img> Curriculum
              </button>
              <button className="enrollnow_btn">
                <img src={enroll} alt=""></img>Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="course_division">
        <div>
          <img src={line} alt=""></img>
        </div>
        <h5>2</h5>
        <h3>Build</h3>
        <p>
          Work on our Real-time <span>Projects , Task Based</span>{" "}
        </p>
      </div>
      <div></div>
      <section className="build_contaienr">
        <div className="build_inner">
          <div className="build_project_img" data-aos="fade-up">
            <img src={lms} alt=""></img>
          </div>
          <div className="build_project_content" data-aos="fade-up">
            <p>
              <img className="build_img" src={buildimg}></img>
            </p>
            <h4>LMS Project</h4>
            <p>
              An LMS project develops a digital platform for online learning,
              featuring course creation, content management, user tracking,
              assessments, and reporting, aimed at enhancing educational
              interaction.
            </p>

            <div className="build_btn">
              <button className="viewproject_btn">
                View Project <img src={nextarrow} alt=""></img>{" "}
              </button>
              <button className="viewallcourses_btn">
                View All Courses <img src={viewimg} alt=""></img>{" "}
              </button>
            </div>
          </div>
          <div className="build_project_content" data-aos="fade-up">
            <p>
              <img className="build_img" src={buildimg}></img>
            </p>
            <h4>HRMS Project</h4>
            <p>
              The HRMS project develops a digital system for managing HR
              functions like employee data, payroll, recruitment, and
              performance, aiming to streamline processes and enhance
              organizational efficiency.
            </p>
            <div className="build_btn">
              <button className="viewproject_btn">
                View Project <img src={nextarrow} alt=""></img>{" "}
              </button>
              <button className="viewallcourses_btn">
                View All Courses <img src={viewimg} alt=""></img>{" "}
              </button>
            </div>
          </div>
          <div className="build_project_img" data-aos="fade-up">
            <img src={crm} alt=""></img>
          </div>
          <div className="build_project_img " data-aos="fade-up">
            <img src={hrms} alt=""></img>
          </div>
          <div className="build_project_content" data-aos="fade-up">
            <p>
              <img className="build_img" src={buildimg}></img>
            </p>
            <h4>CRM Project</h4>
            <p>
              A CRM project develops a system to manage company interactions
              with customers, incorporating tools for contact, sales,
              productivity, and support to enhance service, drive sales, and
              boost retention.
            </p>
            <div className="build_btn">
              <button className="viewproject_btn">
                View Project <img src={nextarrow} alt=""></img>{" "}
              </button>
              <button className="viewallcourses_btn">
                View All Courses <img src={viewimg} alt=""></img>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="course_division">
        <div>
          <img src={line} alt=""></img>
        </div>
        <h5>3</h5>
        <h3>Get Job</h3>
        <p>
          Our focus on job-readiness{" "}
          <span>
            {" "}
            Github Profile, Linkedin Profile, Resume Prep and help Apply
          </span>{" "}
        </p>
      </div>
      <section className="getjob_header">
        <div className="getjob_inner">
          <div className="getjob_content_container">
            <div className="getjob_content" data-aos="fade-up">
              <p>
                <img src={github} alt=""></img>
              </p>
              <h3>GitHub Profile</h3>
              <p>
                Guidance on creating and maintaining a professional GitHub
                profile to showcase technical projects and coding prowess.
              </p>
            </div>
            <div className="getjob_content" data-aos="fade-up">
              <p>
                <img src={linkedin} alt=""></img>
              </p>
              <h3>LinkedIn Profile</h3>
              <p>
                Assistance in crafting a compelling LinkedIn profile for
                networking and visibility among recruiters.
              </p>
            </div>
            <div className="getjob_content" data-aos="fade-up">
              <p>
                <img src={resume} alt=""></img>
              </p>
              <h3>Resume Preparation</h3>
              <p>
                Expert advice on resume writing to effectively highlight skills,
                experience, and achievements.
              </p>
            </div>
            <div className="getjob_content" data-aos="fade-up">
              <p>
                <img src={helpapply} alt=""></img>
              </p>
              <h3>Help in Applying</h3>
              <p>
                Support in identifying suitable job opportunities and navigating
                the application process.
              </p>
            </div>
            <div className="course_advisor" data-aos="fade-up">
              <button className="course_advisor_btn">
                {" "}
                <img src={viewimg} alt=""></img>Contact Course Advisor
              </button>
            </div>
          </div>
          <div className="course_getjob_image">
            <img src={courseworld} alt=""></img>
          </div>
        </div>
      </section>
      <section className="whyBytes_container">
        <ScrollTrigger
          onEnter={() => seCountertOn(true)}
          onExit={() => seCountertOn(false)}
        >
          <h2 className="whybytes_text">Why Bytesinbits</h2>
          <div className="whyBytes_inner">
            <div className="numbers_container">
              <div className="numbers_content">
                <h1>
                  {" "}
                  {counterOn && <CountUp end={5000} suffix="+"></CountUp>}
                </h1>
                <p>Learners</p>
              </div>
              <div className="numbers_content">
                <h1>{counterOn && <CountUp end={500} suffix="+"></CountUp>}</h1>
                <p>Batches</p>
              </div>
              <div className="numbers_content">
                <h1> {counterOn && <CountUp end={14} suffix="+"></CountUp>}</h1>
                <p>Years</p>
              </div>
              <div className="numbers_content">
                <h1>24/7</h1>
                <p>Support</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>
      <div className="keyfeature_text">
        <h1 style={{ color: "#393939" }}>Key Features</h1>
      </div>
      <section
        className="keyfeature_container"
        style={{ marginBottom: "30px" }}
      >
        <div className="keyfeature_inner">
          <div className="keyfeature" data-aos="fade-up">
            <h2>
              <img src={star} alt=""></img>
              Real Time Practice Labs
            </h2>
            <p>
              Every Vercel deploy is immutable, and domains act as pointers.
              Reverting and deploying is an atomic swap operation.
            </p>
          </div>
          <div className="keyfeature" data-aos="fade-up">
            <h2>
              <img src={docimg} alt=""></img>
              Physical And Virtual Online Classrooms
            </h2>
            <p>
              Our Edge intelligently preserves multiple concurrent versions of
              an app, including all their JS, CSS, and other assets, to not
              interrupt existing traffic as you ship.
            </p>
          </div>
          <div className="keyfeature" data-aos="fade-up">
            <h2>
              <img src={lightning} alt=""></img>
              24/7 Support On Slack
            </h2>
            <p>
              Deploying and reverting ensures the successful provisioning and
              acquisition of resources and metadata, to ensure user traffic
              never slows down or sees errors.
            </p>
          </div>
          <div className="keyfeature" data-aos="fade-up">
            <h2>
              <img src={star} alt=""></img>
              Job & Interview Assistance
            </h2>
            <p>
              Every Vercel deploy is immutable, and domains act as pointers.
              Reverting and deploying is an atomic swap operation.
            </p>
          </div>
          <div className="keyfeature" data-aos="fade-up">
            <h2>
              <img src={lightning} alt=""></img>
              Live Projects With Our Industry Partners
            </h2>
            <p>
              Our Edge intelligently preserves multiple concurrent versions of
              an app, including all their JS, CSS, and other assets, to not
              interrupt existing traffic as you ship.
            </p>
          </div>
          <div className="keyfeature" data-aos="fade-up">
            <h2>
              <img src={docimg} alt=""></img>
              Internship After Course
            </h2>
            <p>
              Deploying and reverting ensures the successful provisioning and
              acquisition of resources and metadata, to ensure user traffic
              never slows down or sees errors.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
