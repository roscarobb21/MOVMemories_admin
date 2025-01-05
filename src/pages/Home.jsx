import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigator from "../elements/Navbar";
import background from "../assets/home_background.jpg";
import Socials from "../elements/Socials";

import "./Home.css";

function Home({langData}) {
  const [langFile, setLangFile] = useState("")

  useEffect(() =>{
    setLangFile(langData)
    console.log(langData)
  },[])

  const divStyle = {
    backgroundImage: `url(${background})`, // Set the imported image URL
    backgroundSize: "cover", // Ensure the image covers the entire container
    backgroundPosition: "center", // Center the image
    height: "100vh", // Set the height to take up full viewport
    backgroundRepat: "no-repeat",
    backgroundAttachment: "scroll",
  };

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
          {langFile.small_accent}
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
