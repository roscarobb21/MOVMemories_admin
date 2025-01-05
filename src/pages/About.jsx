import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Container, Row, Col } from "reactstrap";

import Navigator from "../elements/Navbar";
import about_picture from "../assets/about_picture.jpg";
import Socials from "../elements/Socials";

import "./About.css";


function About({langData}) {
  const [langFile, setLangFile] = useState("")

  useEffect(() =>{
    setLangFile(langData)
    console.log(langFile)
  },[])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth);
  }, 200); // Debounce for 200ms

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="background-dark-color">
      <div id="page-wrap">
        <div></div>
        <Navigator props={1} />
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
                {langFile.body_text_1}
                <br></br>
                <br></br>
                {langFile.body_text_2}
                <br></br>
                <br></br>
                {langFile.body_text_3}
                <br></br>
                <br></br>
                {langFile.body_text_4}
                <br></br>
                <br></br>
                {langFile.body_text_5}
                <br></br>
                <br></br>
                {langFile.body_text_6}
                <br></br>
                <br></br>
                {langFile.body_text_7}
                <br></br>
                <br></br>
                {langFile.body_text_8}
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
