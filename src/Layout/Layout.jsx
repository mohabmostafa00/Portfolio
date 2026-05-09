import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Pages/Projects";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import "./style.css";

function Layout() {
  return (
    <BrowserRouter>
      {" "}
      <div className="layout">
        {" "}
        <Navbar />{" "}
        <main className="main-content">
          {" "}
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />{" "}
            <Route path="/project" element={<Projects />} />{" "}
            <Route path="/about" element={<About />} />{" "}
            <Route path="/resume" element={<Resume />} />{" "}
          </Routes>{" "}
        </main>{" "}
        <Footer />{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default Layout;
