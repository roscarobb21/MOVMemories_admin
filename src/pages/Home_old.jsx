import { useState, useEffect } from "react";

import Navigator from "../elements/Navbar";
import { Container, Row, Col } from "reactstrap";

import background from "../assets/background.jpg";
import insta_logo from "../assets/instagram_logo.svg";
import facebook_logo from "../assets/facebook_logo.svg";
import tiktok_logo from "../assets/tiktok_logo.svg";
import youtube_logo from "../assets/youtube_logo.svg";
import "./Home.css";

function Home(props) {
  const divStyle = {
    backgroundImage: `url(${background})`, // Set the imported image URL
    backgroundSize: "cover", // Ensure the image covers the entire container
    backgroundPosition: "center", // Center the image
    height: "200vh", // Set the height to take up full viewport
    backgroundRepat: "no-repeat",
    backgroundAttachment: "scroll",
  };

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "-100vh",
    pointerEvents: "none", // Optional, to prevent overlay from blocking interactions
  };

  const bottomElementStyle = {
    position: "fixed", // Fixed position, will stay at the bottom of the viewport
    bottom: 0, // Align to the bottom
    left: 0, // Align to the left of the viewport
    width: "100%", // Full width to span across the screen
    backgroundColor: "rgba(128, 117, 117, 0.6)", // Semi-transparent background
    color: "white", // White text color
    textAlign: "center", // Center the text inside the element
    padding: "10px", // Padding around the text
    zIndex: 1000, // Ensure the element is above other content
  };

  const bottomElementStyleOpaque = {
    position: "fixed", // Fixed position, will stay at the bottom of the viewport
    bottom: 0, // Align to the bottom
    left: 0, // Align to the left of the viewport
    width: "100%", // Full width to span across the screen
    backgroundColor: "rgba(128, 117, 117, 1)", // Semi-transparent background
    color: "white", // White text color
    textAlign: "center", // Center the text inside the element
    padding: "10px", // Padding around the text
    zIndex: 1000, // Ensure the element is above other content
  };

  const [isBottom, setIsBottom] = useState(false);

  const checkIfBottom = () => {
    // Get the scroll position and the total height of the document
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user is at the bottom (or very close to it)
    if (scrollPosition + 1 >= documentHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener to check when the user scrolls
    window.addEventListener("scroll", checkIfBottom);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkIfBottom);
    };
  }, []);

  return (
    <div style={{ minHeight: "200vh" }}>
      <div style={divStyle} id="page-wrap">
        <div style={overlayStyle}></div>
        <Container fluid style={{ width: "100%", padding: 0 }}>
          <Navigator props={0.2} />
          {/* <Container style={{minHeight:'33vh'}}></Container> */}
        </Container>

        <Container style={{}}>
          <span className="space-grotesk-slim big-text accent-text-color">
            Embark on a cinematic journey with us
          </span>
        </Container>
        <div
          style={isBottom ? bottomElementStyleOpaque : bottomElementStyle}
          className={`fade-in ${isBottom ? "visible" : ""}`}
        >
          <span className="space-grotesk-slim small-text accent-text-color">
            Join us in our own little social media world
          </span>
          <div>
            <Row className="d-flex justify-content-center">
              <Col className="d-flex justify-content-center">
                <span>
                  <a href="https://instagram.com">
                    <img
                      className="social-logo-small"
                      alt="instagram_logo"
                      src={insta_logo}
                    ></img>
                  </a>
                </span>

                <a href="https://instagram.com">
                  <img
                    className="social-logo-small"
                    alt="instagram_logo"
                    src={facebook_logo}
                  ></img>
                </a>

                <a href="https://instagram.com">
                  <img
                    className="social-logo-small"
                    alt="instagram_logo"
                    src={tiktok_logo}
                  ></img>
                </a>

                <a href="https://instagram.com">
                  <img
                    className="social-logo-small"
                    alt="instagram_logo"
                    src={youtube_logo}
                  ></img>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
