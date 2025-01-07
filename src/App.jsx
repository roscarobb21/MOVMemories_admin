import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Loader from './pages/Loader';


function App() {
  const [lang, setlang] = useState(null);
  const [langData, setLangData] = useState(null);

  const get_lang_file = async (lang) => {
    const path = "./assets/lang-" + lang + ".json"
    console.log("Lang path is : ", path);
    let response = await fetch(path); // Adjust the path to match the file's location in the public folder
    let json_response = await response.json();
    setLangData(json_response);
  };

  // Retrieve the name from localStorage when the component mounts
  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang === null) {
      // use EN by default
      console.log("Language not set. Default - EN");
      setlang("EN");
      localStorage.setItem("language", "EN");
    } else {
      console.log("Language set");
      setlang(lang);
    }
    get_lang_file(lang);
  }, []);

  if (!langData) {
    return <Loader />;
  }

  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                langData={langData["pages"]["home"]}
                navData={langData["navbar"]}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                langData={langData["pages"]["home"]}
                navData={langData["navbar"]}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                langData={langData["pages"]["about"]}
                navData={langData["navbar"]}
              />
            }
          />
          <Route
            path="/packages"
            element={
              <Packages
                langData={langData["pages"]["packages"]}
                navData={langData["navbar"]}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                langData={langData["pages"]["contact"]}
                navData={langData["navbar"]}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
