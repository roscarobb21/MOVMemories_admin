import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Container, Row, Col } from "reactstrap";

import Navigator from "../elements/Navbar";
import Loader from "../pages/Loader";
import about_picture from "../assets/about_picture.jpg";
import Socials from "../elements/Socials";

import "./About.css";


function About({langData, navData}) {
  const [langFile, setLangFile] = useState("")
  const [navLang, setNavLang] = useState(null)

  useEffect(() =>{
    if (langData) setLangFile(langData)
    if (navData) setNavLang(navData)
  },[langData,navData])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth);
  }, 200); // Debounce for 200ms

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!langFile || !navLang)
  {
    return <Loader/>
  }
  
  return (
    <div className="background-dark-color">
      <div id="page-wrap">
        <div></div>
        <Navigator lang={navData} />
        <Container
          fluid
          className="inverted-color-text margin-from-header default-container-padding"
        >
          <Row>
            <Col l={6} md={6} s={12} xs={12}>
              <div
                style={{ textAlign: "left" }}
                className={"space-grotesk-big-bold "}
              >
                {langFile.header_text}
              </div>
              <br></br>
              <br></br>
              <div className={"space-grotesk-slim italic justify-text "}>
                {langFile.body_text.map((element)=>{
                  return (
                    <div>
                      <span>{element}</span>
                      <br></br>
                      <br></br>
                    </div>
                  );
                })}
              </div>
              <br></br>
            </Col>
            <Col l={6} md={6} s={12} xs={12}>
              <img className={"about-picture"} src={about_picture}></img>
            </Col>
          </Row>
        </Container>
        <Socials />
      </div>
    </div>
  );
}

export default About;
