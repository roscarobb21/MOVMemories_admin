import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Container, Row, Col } from "reactstrap";

import Navigator from "../elements/Navbar";
import about_picture from "../assets/about_picture.jpg";
import Socials from "../elements/Socials";

import "./About.css";

const minimal_width_for_losing_padding = 768;

function About(args) {
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
        <br></br>
        <br></br>
        <br></br>
        <Container fluid className="inverted-color-text">
          <Row>
            <Col l={6} md={6} s={12} xs={12} className={windowWidth > minimal_width_for_losing_padding ? "about-col-padding" : "minimal-padding-on-mobile"}>
              <div
                style={{ textAlign: "left" }}
                className={"space-grotesk-big-bold " + (windowWidth > minimal_width_for_losing_padding ? "about-text-padding " : "")}
              >
                Hi, and thank you for stopping by!
              </div>
              <br></br>
              <div
                className={"space-grotesk-slim italic justify-text " + (windowWidth > minimal_width_for_losing_padding ? "about-text-padding " : "")}
              >
                Perhaps you didn't find us by chance, and if you're here, here's
                what you should know about us:
                <br></br>
                <br></br>
                In our daily lives we are partners and in our work, we are a
                creative team dedicated to capturing authentic emotions and
                vibrant stories through our camera lens. Whether you're planning
                a wedding, a baptism, or any other significant moment, we are
                here to transform your memories into visual art.
                <br></br>
                <br></br>
                We believe that the beauty of videography lies in each artist's
                eye and the connection they create with their subjects.
                <br></br>
                <br></br>
                More than just your videographers, we want to join your journey
                as your supporters. We are here to listen, guide, and help.
                <br></br>
                <br></br>
                On your big day, we put all worries aside. We take care of
                everything related to videography so that you can focus on
                living and enjoying every moment. We believe that your
                relaxation and naturalness are key to authentic and memorable
                videos.
                <br></br>
                <br></br>A successful video is the result of close collaboration
                and trust between us and you. The more open and relaxed you are,
                the more beautifully your story will be portrayed through our
                lens.
                <br></br>
                <br></br>
                We are excited to meet you and turn every special moment into an
                everlasting memory. Our work is way beyond simple videos; it
                reflects our artistic signature.
                <br></br>
                <br></br>
                Let's create something magical together!
              </div>
              <br></br>
            </Col>
            <Col l={6} md={6} s={12} xs={12} className={windowWidth > minimal_width_for_losing_padding ? "about-col-padding" : "minimal-padding-on-mobile"}>
              <img
                className={"about-picture " + (windowWidth > minimal_width_for_losing_padding ? "about-picture-padding" : "" )}
                src={about_picture}
              ></img>
            </Col>
          </Row>
        </Container>
        <Socials />
      </div>
    </div>
  );
}

export default About;
