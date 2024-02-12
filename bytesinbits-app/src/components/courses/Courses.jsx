import React from "react";
import "../courses/Courses.css";
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
const Courses = () => {
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
          <div className="individual_course">
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
          <div className="individual_course">
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
          <div className="individual_course">
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
          <div className="individual_course">
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
          <div className="individual_course">
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
        <p>Work on our Real-time Projects , Task Based </p>
      </div>
      <div></div>
      <section className="build_contaienr">
        <div className="build_inner">
          <div className="build_project_img">
            <img src={lms} alt=""></img>
          </div>
          <div className="build_project_content">
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
          <div className="build_project_content">
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
          <div className="build_project_img">
            <img src={crm} alt=""></img>
          </div>
          <div className="build_project_img">
            <img src={hrms} alt=""></img>
          </div>
          <div className="build_project_content">
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
          Our focus on job-readiness Github Profile, Linkedin Profile, Resume
          Prep and help Apply{" "}
        </p>
      </div>
    </>
  );
};

export default Courses;
