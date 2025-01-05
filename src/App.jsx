import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";

import {Spinner, Container} from 'reactstrap'
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Loader from './pages/Loader';


function App() {
  const [lang, setlang] = useState("");
  const [langData, setLangData] = useState(null);

  const get_lang_file = async (lang) => {
      let response = await fetch('./assets/lang-' + lang + ".json") // Adjust the path to match the file's location in the public folder
      let json_response = await response.json();
      console.log(json_response)
      setLangData(json_response)
  };

  // Retrieve the name from localStorage when the component mounts
  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang === null) {
      // use EN by default
      console.log("Not present");
      setlang("EN");
      localStorage.setItem("language", "EN");
    } else {
      console.log("Present");
      setlang(lang);
    }
    get_lang_file(lang);
  }, []);

  if (langData != null){
    return (
      <Router>
        <div style={{ width: "100%" }}>
          <Routes>
            {" "}
            {/* Define all your routes here */}
            <Route path="/" element={<Home langData={langData["pages"]["home"]}/>} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/about" element={<About langData={langData["pages"]["about"]}/>} />
            <Route path="/packages" element={<Packages langData={langData["pages"]["packages"]}/>} />
            <Route path="/contact" element={<Contact langData={langData["pages"]["contact"]}/>} />
          </Routes>
        </div>
      </Router>
    );
  }
  else{
  return <Loader />;
  }
}

export default App;
