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
  const [isMobile, setIsMobile] = useState(false);
  const [langFile, setLangFile] = useState(null)
  const [navLang, setNavLang] = useState(null)

  const imgArr = [wedding1, wedding2, wedding3];

  useEffect(() => {
    if (langData) setLangFile(Array.from(langData));
    if (navData) setNavLang(navData);
  }, [langData, navData]);


  
    const setEqualHeight = () => {
      const rows = document.querySelectorAll('.equal-height-row');
      let maxHeight = 0;
  
      // Calculate the tallest row
      rows.forEach(row => {
        maxHeight = Math.max(maxHeight, row.offsetHeight);
      });
  
      // Apply the min-height to all rows (instead of setting height directly)
      rows.forEach(row => {
        row.style.minHeight = `${maxHeight}px`;
      });
    };
  
    const resetHeights = () => {
      const rows = document.querySelectorAll('.equal-height-row');
      rows.forEach(row => {
        row.style.minHeight = 'auto'; // Reset to auto height on mobile
      });
    };
  
    const checkWindowSize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true); // Mobile screen (below `md`)
      } else {
        setIsMobile(false); // Desktop screen (above `md`)
      }
    };
  
    useEffect(() => {
      // Check the initial window size
      checkWindowSize();
  
      // Set the equal height only if it's not a mobile screen
      if (!isMobile) {
        requestAnimationFrame(() => {
          setEqualHeight(); // Initial height setup
        });
      }
  
      // Resize event listener
      const handleResize = () => {
        checkWindowSize();
  
        // If the window size is above `md`, apply equal height logic
        if (!isMobile) {
          setEqualHeight();
        } else {
          // Reset min-height if below `md`
          resetHeights();
        }
      };
  
      // Add event listener for resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the resize event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isMobile]);
  

  if (!langFile || !navLang)
    {
      return <Loader />;
    }
  
  return (
    <div className="background-dark-color packages-wrapper">
      <div className="page-wrap">
        <Navigator lang={navLang} />
        <div className="">
          <Container fluid className="container-height-adjust margin-from-header default-container-padding" style={{padding:'30px', paddingTop:'0px'}}>
            <Row className="align-items-stretch" >
              {
              langFile.map((element, index)=>{
                return (
                  <Col md={4} key={index} className="d-flex">
                    <div className="">
                      <img
                        className="showcase-image-res"
                        src={imgArr[index]}
                      ></img>
                      <Row className="flex-grow-1 equal-height-row">
                        <div className="inverted-color-text justify-text space-grotesk-big-bold showcase-padding-top">
                          <span>{element["header"]}</span>
                        </div>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row className="">
                        <div className="space-grotesk-slim inverted-color-text justify-text">
                          {element.price_tag}
                        </div>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row className="">
                        <Col>
                          <div className="space-grotesk-slim inverted-color-text justify-text">
                            {element.description.map((desc_p, index) => {
                              return (
                                <div key={index}>
                                  <span>{desc_p}</span>
                                  <br></br>
                                  <br></br>
                                </div>
                              );
                            })}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })
              }
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
