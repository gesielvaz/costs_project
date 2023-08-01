import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Container from "./components/layout/Container.module.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Vehicles from "./components/pages/Vehicles";

function App() {
  return (
    <Router>
      <Navbar />
      <div className={`min-height ${Container.customClass}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/vehicles" element={<Vehicles />} /> {/* Render the VehiclesPage */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
