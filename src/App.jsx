import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Routes>
          {" "}
          {/* Define all your routes here */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/home" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact/>}/>
          {/* <Route path="/contact" element={<Contact />} /> Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
