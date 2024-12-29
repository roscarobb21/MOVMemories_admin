import Navigator from "../elements/Navbar";

import { Container, Row, Col } from "reactstrap";
import about_picture from "../assets/about_picture.jpg";

import Socials from "../elements/Socials";

import "./About.css";

function About(args) {
  const currentRoute = location.pathname;
  console.log(currentRoute);
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
            <Col l={6} md={6} s={12} xs={12} className="about-col-padding">
              <div
                style={{ textAlign: "left" }}
                className="about-text-padding space-grotesk-big-bold"
              >
                Hi, and thank you for stopping by!
              </div>
              <br></br>
              <div
                style={{ textAlign: "left" }}
                className="space-grotesk-slim italic about-text-padding"
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
            </Col>
            <Col l={6} md={6} s={12} xs={12} className="about-col-padding">
              <img
                className="about-picture about-picture-padding"
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
