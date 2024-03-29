import React, { useEffect, useState } from "react";
import "../home/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import contactimg from "../../assets/headerimg/contact.png";
import demoimg from "../../assets/headerimg/demo.png";
import globalimg from "../../assets/headerimg/global.png";
import career from "../../assets/companycard/careergrowth.png";
import message from "../../assets/companycard/message.png";
import support from "../../assets/companycard/studentsupport.png";
import vector from "../../assets/companycard/Vector.png";
import golink from "../../assets/companycard/linkimg.png";
import downloadimg from "../../assets/allcoursesimg/download.png";
import duration from "../../assets/allcoursesimg/duration.png";
import enroll from "../../assets/allcoursesimg/enroll.png";
import liveimg from "../../assets/allcoursesimg/live.png";
import rating from "../../assets/allcoursesimg/ratingstar.png";
import lms from "../../assets/buildimg/lms.png";
import hrms from "../../assets/buildimg/hrms.png";
import crm from "../../assets/buildimg/lms.png";
import buildimg from "../../assets/buildimg/buildproject.png";
import viewimg from "../../assets/buildimg/viewcourses.png";
import nextarrow from "../../assets/buildimg/nextarrow.png";
import getjobworld from "../../assets/getjobimg/getjobworld.png";
import github from "../../assets/getjobimg/github.png";
import linkedin from "../../assets/getjobimg/linkedin.png";
import resume from "../../assets/getjobimg/resume.png";
import helpapply from "../../assets/getjobimg/helpapply.png";
import docimg from "../../assets/keyfeatures/docimg.png";
import lightning from "../../assets/keyfeatures/lightning.png";
import star from "../../assets/keyfeatures/star.png";
import calendor from "../../assets/batchimg/calendor.png";
import time from "../../assets/batchimg/time.png";
const Home = () => {
  const [counterOn, seCountertOn] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <header className="home_header_container">
        <div className="home_header_inner">
          <div className="left_header">
            <div className="header_title">
              <h1>Learn.</h1>
              <h1>Build. </h1>
              <h1>Get Job</h1>
            </div>
            <div className="header_content">
              <p>
                50,000+ uplifted through our hybrid classroom & online training,
                <span>enriched by real-time projects and job support.</span>
              </p>
            </div>
            <div className="header_btn">
              <button className="header_demobtn">
                {" "}
                <img src={demoimg} alt="" />
                Join Free Demo
              </button>
              <button className="header_contactbtn">
                {" "}
                <img src={contactimg} alt=""></img>Contact Course Advisor
              </button>
            </div>
          </div>
          <div className="right_header">
            <img src={globalimg} alt="globalimg"></img>
          </div>
        </div>
      </header>
      <section className="company_card_container">
        <div className="company_card_inner">
          <div className="company_card company_card1" data-aos="fade-up">
            <h2>Best Qualified Tutors</h2>
            <div className="card_details">
              <p>
                Our instructors have expertise in various programming languages
                and technologies, ensuring our students receive a Quality
                education. It’s essential to have a strong foundation in
                programming languages and technologies
              </p>
            </div>
            <div className="company_card_btn">
              <img src={message} alt=""></img>
              <a href="/">
                {" "}
                Explore more<img id="vectorimg" src={vector} alt=""></img>
              </a>
            </div>
          </div>
          <div className="company_card company_card2" data-aos="fade-up">
            <h2>Student Support</h2>
            <div className="card_details">
              <p>
                At our institute, we prioritize student success and provide
                comprehensive support to ensure students have a positive
                learning experience.
              </p>
            </div>
            <div className="company_card_btn">
              <img src={support} alt=""></img>
              <a href="/">
                {" "}
                Explore more
                <img id="vectorimg" src={vector} alt=""></img>
              </a>
            </div>
          </div>
          <div className="company_card company_card3" data-aos="fade-up">
            <h2>Career Growth</h2>
            <div className="card_details">
              <p>
                In our institute, we believe in providing students with not only
                quality education but also the necessary resources and support
                for their personal and professional growth.
              </p>
            </div>
            <div className="company_card_btn">
              <img src={career}></img>
              <a href="/">
                {" "}
                Explore more<img id="vectorimg" src={vector} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home_course_container">
        <div className="home_course_inner">
          <div className="home_course home_course_1" data-aos="fade-up">
            <h2>Advance Embedded System</h2>
            <p>
              Advanced Embedded System Programming is a course designed for
              individuals interested in learning. This course covers topics such
              as device drivers, advanced memory management techniques.
            </p>
            <img src={golink} alt=""></img>
          </div>
          <div className="home_course home_course_2" data-aos="fade-up">
            <h2>Python FullStack Training</h2>
            <p>
              Python Programming is a high-level, interpreted programming
              language that focuses on code readability and conciseness. It is
              easy to learn and widely used for web development, scientific
              computing,
            </p>
            <img src={golink} alt=""></img>
          </div>
          <div className="home_course home_course_3" data-aos="fade-up">
            <h2>Best Qualified Tutors</h2>
            <p>
              Explore the power of MATLAB with our comprehensive course. Learn
              the fundamentals of programming, data analysis, and advanced
              techniques.
            </p>
            <img src={golink} alt=""></img>
          </div>
        </div>
        <div className="allcourses">
          <button className="allcourses_btn">All Courses</button>
        </div>
      </section>
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
      <div className="header_build">
        <button className="header_build_btn">Build</button>
      </div>
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
          <div className="build_project_img" data-aos="fade-up">
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
      <div className="getjob_header">
        <button className="getjob_btn">Get Job</button>
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
            <div className="course_advisor">
              <button className="course_advisor_btn">
                {" "}
                <img src={viewimg} alt=""></img>Contact Course Advisor
              </button>
            </div>
          </div>
          <div className="getjob_image">
            <img src={getjobworld} alt=""></img>
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
                  {counterOn && <CountUp end={5000} suffix="+"></CountUp>}
                </h1>
                <p>Learners</p>
              </div>
              <div className="numbers_content">
                <h1>
                  {counterOn && <CountUp end={500} suffix="+"></CountUp>}{" "}
                </h1>
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
        <h1>Key Features</h1>
      </div>
      <section className="keyfeature_container">
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
      <div className="batch_schedule_text">
        <h1>Upcoming Batch Schedule</h1>
      </div>
      <section className="batch_container">
        <div className="batch_inner">
          <div className="batch" data-aos="fade-up">
            <div className="batch_title">
              {" "}
              <h2>Week Day Batches</h2>
              <p>(Mon-Fri)</p>
            </div>
            <div className="batch_schedule">
              <div className="batch_date">
                <div>
                  <div>
                    <img src={calendor}></img>
                  </div>
                </div>
                <div>
                  <h4>5th Feb 2024</h4>
                  <p>Monday</p>
                </div>
              </div>
              <div className="batch_time">
                <div>
                  <img src={time}></img>
                </div>
                <div>
                  <h4>8 AM (IST)</h4>
                  <p>1hr-1:30hr / Per Session</p>
                </div>
              </div>
            </div>
            <div className="batch_btn">
              <button>
                <img src={viewimg} alt=""></img> Get Free Course Demo
              </button>
            </div>
          </div>
          <div className="batch" data-aos="fade-up">
            <div className="batch_title">
              <h2>Week Day Batches</h2>
              <p>(Mon-Fri)</p>
            </div>
            <div className="batch_schedule">
              <div className="batch_date">
                <div>
                  <img src={calendor} alt=""></img>
                </div>{" "}
                <div>
                  <h4>7th Feb 2024</h4>
                  <p>Wednesday</p>
                </div>
              </div>
              <div className="batch_time">
                {" "}
                <div>
                  <img src={time} alt=""></img>
                </div>
                <div>
                  {" "}
                  <h4>10 AM (IST)</h4>
                  <p>1hr-1:30hr / Per Session</p>
                </div>
              </div>
            </div>
            <div className="batch_btn">
              <button>
                {" "}
                <img src={viewimg} alt=""></img>Get Free Course Demo
              </button>
            </div>
          </div>
          <div className="batch" data-aos="fade-up">
            <div className="batch_title">
              <h2>Week Day Batches</h2>
              <p>(Mon-Fri)</p>
            </div>
            <div className="batch_schedule">
              <div className="batch_date">
                <div>
                  <img src={calendor}></img>
                </div>{" "}
                <div>
                  {" "}
                  <h4>9th Feb 2024</h4>
                  <p>Friday</p>
                </div>
              </div>
              <div className="batch_time">
                <div>
                  <img src={time}></img>
                </div>
                <div>
                  <h4>12 PM (IST)</h4>
                  <p>1hr-1:30hr / Per Session</p>
                </div>
              </div>
            </div>
            <div className="batch_btn">
              <button>
                <img src={viewimg} alt=""></img> Get Free Course Demo
              </button>
            </div>
          </div>
          <div className="batch_card" data-aos="fade-up">
            <h2>Can’t find a batch you were looking for?</h2>
            <div className="batch_btn">
              <button>
                <img src={viewimg} alt=""></img> Get Free Course Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="last_content_container">
        <div className="last_content_inner" data-aos="fade-up">
          <div className="last_content">
            <div className="last_content_title">
              <h1>Learn,</h1>
              <h2>Build</h2>
              <h3>Get Job.</h3>
            </div>
            <p>
              50,000+ uplifted through our hybrid classroom & online training,
              enriched by real-time projects and job support.
            </p>
          </div>
          <div className="last_button" data-aos="fade-up">
            <button className="last_demo_btn">
              <img src={demoimg} alt="" />
              Demo
            </button>
            <button className="last_get_btn">
              <img src={viewimg} alt=""></img>Get In Touch{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
