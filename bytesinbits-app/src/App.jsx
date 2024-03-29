import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar.jsx";
import Courses from "./components/courses/Courses";
import Aboutus from "./components/aboutus/Aboutus";
import { Founder } from "./components/aboutus/founderpage/Founder";
import Admission from "./components/aboutus/admission/Admission";
import Aboutbytes from "./components/aboutus/aboutbytesinbits/Aboutbytes";
import Blog from "./components/blog/Blog";
import Placements from "./components/placements/Placements";
import Contactus from "./components/contactus/Contactus";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

function App() {
  const [topToScroll, setTopToScroll] = useState(false);
  const moveToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    const handleScrollbar = () => {
      setTopToScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollbar);
    return () => {
      window.removeEventListener("scroll", handleScrollbar);
    };
  });
  return (
    <>
      <div className={`${topToScroll ? "topscroll" : "removetopscroll"}`}>
        <FaCircleArrowUp
          size={50}
          color=" #ffb400"
          onClick={moveToTop}
        ></FaCircleArrowUp>
      </div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="courses" element={<Courses></Courses>}></Route>
        <Route path="placements" element={<Placements></Placements>}></Route>
        <Route path="aboutus" element={<Aboutus></Aboutus>}>
          <Route index element={<Founder></Founder>}></Route>
          <Route path="admission" element={<Admission></Admission>}></Route>
          <Route path="founder" element={<Founder></Founder>}></Route>
          <Route path="aboutbytes" element={<Aboutbytes />}></Route>
        </Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="contactus" element={<Contactus />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
