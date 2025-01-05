import { useState, useEffect } from "react";
import Navigator from "../elements/Navbar";

import { Container, Row, Col } from "reactstrap";

import Socials from "../elements/Socials";
import Loader from '../pages/Loader';

import wedding1 from "../assets/wedding1.jpg";
import wedding2 from "../assets/wedding2.jpg";
import wedding3 from "../assets/wedding3.jpg";
import "./Packages.css";

function Packages({langData}) {
  const [langFile, setLangFile] = useState(null)
  const [imgArr, setImgArr] = useState(null)

  useEffect(() =>{
    setLangFile(langData)
    console.log(langData)
  },[])

  useEffect(() =>{
    setImgArr([wedding1, wedding2, wedding3])
  },[])
  
  if (langFile === null)
  {
    return <Loader/>
  }

  return (
    <div className="background-dark-color packages-wrapper">
      <div className="page-wrap">
        <Navigator props={1} />
        <div>
          <Container fluid className="container-height-adjust margin-from-header default-container-padding" style={{padding:'30px', paddingTop:'0px'}}>
            <Row>
              <Col md={4}>
                <div>
                  <img className="showcase-image-res" src={wedding1}></img>
                  <div className="inverted-color-text justify-text space-grotesk-big-bold showcase-padding-top">
                    {/* <span>Memories Box</span>
                    <br></br>
                    <span>“Dancing into Forever”</span> */}
                    <span>{langFile.package_option_1.header}</span>
                    <br></br>
                  </div>
                  <br></br>
                  <div className="space-grotesk-slim inverted-color-text justify-text">
                    {langFile.package_option_1.price_tag}
                  </div>
                  <br></br>
                  <div className="space-grotesk-slim inverted-color-text justify-text">
                    {/* This box consists of a contemporary wedding film with a
                    duration between 5- 10 minutes long. The film includes
                    everything we film on the day from an hour before the
                    ceremony until the completion of the first dance.
                    <br></br>
                    <br></br>
                    Our wedding films use timeless music and cinematic filming
                    to capture your story perfectly.
                    <br></br>
                    <br></br>
                    Drone footage is included, weather and location permitting,
                    to capture stunning aerial views and add a unique
                    perspective to your wedding film. */}
                    {langFile.package_option_1.description.map((desc_p)=>{
                      return (
                        <div>
                          <span>{desc_p}</span>
                          <br></br>
                          <br></br>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <br></br>
              </Col>

              <Col md={4}>
                <div>
                  <img className="showcase-image-res" src={wedding2}></img>
                  <div className="inverted-color-text justify-text space-grotesk-big-bold showcase-padding-top">
                    {/* <span>Memories Box</span>
                    <br></br>
                    <span>“How it all started”</span> */}
                    {langFile.package_option_2.header}
                    <br></br>
                  </div>
                  <br></br>
                  <div className="space-grotesk-slim inverted-color-text justify-text">
                    {/* £1800 */}
                    {langFile.package_option_2.price_tag}
                  </div>
                  <br></br>
                  <div className="space-grotesk-slim inverted-color-text justify-text">
                    {/* This box offers a 10-15 minutes wedding film capturing all
                    the essential moments of your wedding day—from bride and
                    groom preparations through the ceremony and reception, right
                    up to the first dance.
                    <br></br>
                    <br></br>
                    Including preparation moments in your wedding film captures
                    the emotions before the ceremony. These are moments that
                    reveal candid, meaningful interactions and can add an extra
                    spice to your wedding film.
                    <br></br>
                    <br></br>
                    Drone footage is included, weather and location permitting,
                    to capture stunning aerial views and add a unique
                    perspective to your wedding film. */}
                    {langFile.package_option_2.description.map((desc_p)=>{
                      return (
                        <div>
                          <span>{desc_p}</span>
                          <br></br>
                          <br></br>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <br></br>
              </Col>

              <Col md={4}>
                <div>
                  <img className="showcase-image-res" src={wedding3}></img>
                  <div className="inverted-color-text justify-text space-grotesk-big-bold showcase-padding-top">
                    {/* <span>Memories Box</span>
                    <br></br>
                    <span>“Love Fiesta”</span> */}
                    {langFile.package_option_3.header}
                    <br></br>
                  </div>
                  <br></br>
                  <div className="space-grotesk-slim inverted-color-text justify-text">
                    {/* £2200 */}
                    {langFile.package_option_3.price_tag}
                  </div>
                  <br></br>
                  <div className="space-grotesk-slim inverted-color-text justify-text">
                    {/* This is the pinnacle of what we offer and our customers love
                    it. Is our ultimate film package that brings together
                    everything we have to offer - To ensure every joyful moment
                    is preserved, we provide two additional hours of party
                    coverage after the first dance, capturing the fun, laughter,
                    and celebration of your special night.
                    <br></br>
                    <br></br>
                    Additionally to a 15-20 minutes wedding film, you'll receive
                    a highlights trailer meticulously crafted for sharing on
                    social media—perfect for reliving the best moments with
                    friends and family.
                    <br></br>
                    <br></br>
                    We also include in this memories box speeches video and
                    ceremony video.
                    <br></br>
                    <br></br>
                    Drone footage is included, weather and location permitting,
                    to capture stunning aerial views and add a unique
                    perspective to your wedding film. */}
                    {langFile.package_option_3.description.map((desc_p)=>{
                      return (
                        <div>
                          <span>{desc_p}</span>
                          <br></br>
                          <br></br>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <br></br>
              </Col>
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
