import { useState, useEffect } from "react";

import Navigator from "../elements/Navbar";
import { Container, Row, Col } from "reactstrap";

import background from "../assets/home_background.jpg";

import Socials from "../elements/Socials";

import "./Home.css";

function Home(props) {
  const divStyle = {
    backgroundImage: `url(${background})`, // Set the imported image URL
    backgroundSize: "cover", // Ensure the image covers the entire container
    backgroundPosition: "center", // Center the image
    height: "100vh", // Set the height to take up full viewport
    backgroundRepat: "no-repeat",
    backgroundAttachment: "scroll",
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
      <Container fluid style={{ width: "100%", padding: 0 }}>
        <Navigator props={1} />
      </Container>
      <div style={divStyle} id="page-wrap">
        <div
          className="inverted-color-text"
          style={{
            paddingLeft: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: "900px",
          }}
        >
          Embark on a cinematic journey with us
        </div>
      </div>
      <div className="background-dark-color min-height">
        <Container>
          <Row>
            <Col>
              {/* <video width="100%" height="auto" controls>
                <source
                  src={`${process.env.PUBLIC_URL}/assets/video.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}
            </Col>
          </Row>
        </Container>
        <Socials />
      </div>
    </div>
  );
}

export default Home;
