import React from "react";
import "../../components/blog/Blog.css";
import { Link } from "react-router-dom";
import verticalline from "../../assets/blogimg/verticalline.png";
import blogpost from "../../assets/blogimg/blogpost.png";
import blogembedimg from "../../assets/blogimg/blogembedd.png";
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
        <div className="blog_post_left">
          <div className="blog_post_title">
            <h2>
              {" "}
              <img src={verticalline} alt=""></img>Recent Post :
            </h2>
          </div>
          <div className="blog_post_image">
            <img src={blogpost} alt=""></img>
          </div>
        </div>
        <div className="blog_post_right">
          <div className="blog_post_right_1">
            <p>01.Development</p>
            <h3>Important features to look for in Web Development Features</h3>
            <button> Read More</button>
            <hr></hr>
          </div>
          <div className="blog_post_right_2">
            <p>01.</p>
            <img src={blogembedimg} alt=""></img>
            <div>
              <p>Embedded Systems</p>
              <h4>
                Programming embedded systems : active objects in real-time
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
