import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar.jsx";
import Courses from "./components/courses/Courses";
import Aboutus from "./components/aboutus/Aboutus";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="courses" element={<Courses></Courses>}></Route>
        <Route path="aboutus" element={<Aboutus></Aboutus>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
