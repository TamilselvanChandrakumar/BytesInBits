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

function App() {
  return (
    <>
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
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
