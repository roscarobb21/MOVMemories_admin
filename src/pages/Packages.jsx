import { useState, useEffect } from "react";
import Navigator from "../elements/Navbar";

import { Container, Row, Col } from "reactstrap";

import Socials from "../elements/Socials";
import Loader from '../pages/Loader';

import wedding1 from "../assets/wedding1.jpg";
import wedding2 from "../assets/wedding2.jpg";
import wedding3 from "../assets/wedding3.jpg";
import "./Packages.css";

function Packages({langData, navData}) {
  const [langFile, setLangFile] = useState(null)
  const [navLang, setNavLang] = useState(null)

  const imgArr = [wedding1, wedding2, wedding3];

  useEffect(() => {
    if (langData) setLangFile(Array.from(langData));
    if (navData) setNavLang(navData);
  }, [langData, navData]);

  if (!langFile || !navLang)
  {
    return <Loader/>
  }

  return (
    <div className="background-dark-color packages-wrapper">
      <div className="page-wrap">
        <Navigator lang={navLang} />
        <div>
          <Container fluid className="container-height-adjust margin-from-header default-container-padding" style={{padding:'30px', paddingTop:'0px'}}>
            <Row>
              {
              langFile.map((element, index)=>{
                return (
                  <Col md={4}>
                    <div>
                      <img
                        className="showcase-image-res"
                        src={(imgArr[index])}
                      ></img>
                      <div className="inverted-color-text justify-text space-grotesk-big-bold showcase-padding-top">

                        <span>{element["header"]}</span>
                        <br></br>
                      </div>
                      <br></br>
                      <div className="space-grotesk-slim inverted-color-text justify-text">
                        {element.price_tag}
                      </div>
                      <br></br>
                      <div className="space-grotesk-slim inverted-color-text justify-text">
                        {element.description.map((desc_p) => {
                          return (
                            <div>
                              <span>{desc_p}</span>
                              <br></br>
                              <br></br>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <br></br>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="content wavy-divider">.</div>
      <Socials />
    </div>
  );
}

export default Packages;
