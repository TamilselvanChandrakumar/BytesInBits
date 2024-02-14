import React from "react";
import "../../components/blog/Blog.css";
import { Link } from "react-router-dom";
import verticalline from "../../assets/blogimg/verticalline.png";
import blogpost from "../../assets/blogimg/blogpost.png";
import blogembedimg from "../../assets/blogimg/blogembedd.png";
import straightline from "../../assets/blogimg/straightline.png";
import articleembed from "../../assets/blogimg/articleembed.png";
import articleiot from "../../assets/blogimg/articleiot.png";
import articlematlab from "../../assets/blogimg/articlematlab.png";
import articlepython from "../../assets/blogimg/articlepython.png";
import articledev from "../../assets/blogimg/articledevelopment.png";
import articlecloud from "../../assets/blogimg/articlecloud.png";
const Blog = () => {
  return (
    <>
      <div className="blog_header">
        <div className="blog_header_inner">
          <div className="blog_title">
            <h1>
              Expanding<span> Our Knowledge </span> &
            </h1>
            <h1>Yours, One blog at Time</h1>
            <p>All The latest news and events of our creative team</p>
          </div>
          <div className="blog_image_content">
            <h2>Do What is</h2>
            <h2> Great</h2>
          </div>
        </div>
      </div>
      <section className="blog_nav_container">
        <nav className="blog_nav_inner">
          <ul>
            <li>
              {" "}
              <Link to="">Embedded Systems</Link>
            </li>
            <li>
              {" "}
              <Link to="">IoT </Link>
            </li>
            <li>
              <Link to="">MatLab</Link>
            </li>
            <li>
              <Link to="">Python Full Stack web Development</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="blog_post_container">
        <div className="blog_post_title">
          <h2>
            {" "}
            <img src={verticalline} alt=""></img>Recent Post :
          </h2>
        </div>
        <div className="blog_post_inner">
          <div className="blog_post_left">
            <div className="blog_post_image">
              <img src={blogpost} alt=""></img>
            </div>
          </div>
          <div className="blog_post_right">
            <div className="blog_post_right_1">
              <p>
                01.<span>Development</span>
              </p>
              <h3>
                Important features to look for in Web Development Features
              </h3>
              <button> Read More</button>
              <div className="horizontal_line_container">
                <hr className="horizontal_line"></hr>
                <img src={straightline} alt=""></img>
              </div>
            </div>
            <div className="blog_post_right_2">
              <p>01.</p>
              <img src={blogembedimg} alt=""></img>

              <div>
                <h5>Embedded Systems</h5>
                <h4>
                  Programming embedded systems : active objects in real-time
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_artical_container">
        <div className="blog_post_title">
          <h2>
            {" "}
            <img src={verticalline} alt=""></img> Must Read Articles :
          </h2>
        </div>
        <div className="blog_articl_card_container">
          <div className="blog_artical_card">
            <img src={articleembed} alt=""></img>
            <h4>Embedded Systems</h4>
            <h1>Best Embedded Systems Strategies You should be Using</h1>
            <p>
              This helps in collaboration, rollback to previous versions, and
              overall code management. Implement. . .<a href="/">Read More </a>
            </p>
          </div>
          <div className="blog_artical_card">
            <img src={articleiot} alt=""></img>
            <h4>IoT</h4>
            <h1>Guarding the IoT Gates to the Connected world</h1>
            <p>
              As the use of IoT continues to expand, businesses are leaving a
              larger digital footprint than ever. This interconnectedness brings
              about . . .<a href="/">Read More </a>
            </p>
          </div>
          <div className="blog_artical_card">
            <img src={articlematlab} alt=""></img>
            <h4>MatLAb</h4>
            <h1>
              Using AI to help write MATLAB code-The MatLab AL Chat Playground
            </h1>
            <p>
              who works in software development, I’ve recently been exploring
              how to integrate the...
              <a href="/">Read More </a>
            </p>
          </div>
        </div>
      </section>
      <section className="blog_artical_container">
        <div className="blog_articl_card_container">
          <div className="blog_artical_card">
            <img src={articlepython} alt=""></img>
            <h4>Python Full Stack Web Development</h4>
            <h1>How to Transcribe Speech Recordings into Text with Python</h1>
            <p>
              When you have a recording where one or more people are talking,
              it's useful to have a highly. . .<a href="/">Read More </a>
            </p>
          </div>
          <div className="blog_artical_card">
            <img src={articledev} alt=""></img>
            <h4>Development</h4>
            <h1>Comparisons of the Best Web Development Frameworks</h1>
            <p>
              This helps in collaboration, rollback to previous versions, and
              overall code management. Implement. . .<a href="/">Read More </a>
            </p>
          </div>
          <div className="blog_artical_card">
            <img src={articlecloud} alt=""></img>
            <h4>Cloud and Deveops</h4>
            <h1>Cloud Outsourcing a Better Choice for Startups?</h1>
            <p>
              The integration of cloud computing leverages the benefits of cloud
              services to enhance the scalability, flexibility, and automation
              capabilities of. . .<a href="/">Read More </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
