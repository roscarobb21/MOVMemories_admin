import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

import { Offcanvas, OffcanvasBody } from "reactstrap";

import logo from "../assets/logo.png";
import { Cross as Hamburger } from "hamburger-react";
import Loader from "../pages/Loader"
import "./Navbar.css";
import "./SlidingComponent.css";

function Navigator({lang}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [navLang, setNavlang] = useState(null);

  useEffect(() => {
    setNavlang(lang);
  }, [lang]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentRoute = location.pathname;

  if (!navLang) {
    return <Loader />;
  }

  return (
    <div>
      <Container fluid className="background-dark-color">
        <Row
          className={
            "d-flex " +
            (isSmallScreen ? "" : "justify-content-between align-items-center")
          }
        >
          <Col
            xl={12}
            l={12}
            md={12}
            s={6}
            xs={6}
            className={
              "d-flex " +
              (isSmallScreen ? "" : "justify-content-center align-items-center")
            }
          >
            <div
              className={
                "text-center logo-top-margin " +
                (isSmallScreen ? "margin-left-logo-menu" : "")
              }
            >
              <NavbarBrand className="" href="/">
                <img alt="logo" src={logo} className="logo header-title-logo" />
              </NavbarBrand>
            </div>
          </Col>
          <Col
            xl={0}
            l={0}
            md={0}
            s={6}
            xs={6}
            className={
              "d-flex " +
              (isSmallScreen
                ? "hamburger-small-screen"
                : "justify-content-center align-items-center")
            }
          >
            {isSmallScreen && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  zIndex: "1061",
                  marginTop: "20px",
                }}
              >
                <Hamburger
                  toggled={isBurgerOpen}
                  toggle={setBurgerOpen}
                  color="white"
                  onClick={function noRefCheck() {}}
                  distance="lg"
                />
              </div>
            )}
          </Col>
        </Row>

        <Row className="d-flex justify-content-center align-items-center">
          <Col
            xl={12}
            l={12}
            md={12}
            s={0}
            xs={0}
            className="d-flex justify-content-center align-items-center"
          >
            <Navbar expand="md">
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem className="mx-2">
                    <NavLink href="/">
                      <span
                        className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                          currentRoute === "/home" || currentRoute === "/"
                            ? "nav-text-underline-sure"
                            : "nav-text-underline"
                        }`}
                      >
                        {navLang.home}
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mx-2">
                    <NavLink href="/about">
                      <span
                        className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                          currentRoute == "/about"
                            ? "nav-text-underline-sure"
                            : "nav-text-underline"
                        }`}
                      >
                        {navLang.about}
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mx-2">
                    <NavLink href="/packages">
                      <span
                        className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                          currentRoute == "/packages"
                            ? "nav-text-underline-sure"
                            : "nav-text-underline"
                        }`}
                      >
                        {navLang.packages}
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mx-2">
                    <NavLink href="/contact">
                      <span
                        className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                          currentRoute == "/contact"
                            ? "nav-text-underline-sure"
                            : "nav-text-underline"
                        }`}
                      >
                        {navLang.contact}
                      </span>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav >
                      <span className="nav-button-color space-grotesk-1 inverted-color-text ">
                        {navLang.language}
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-dark">
                      <DropdownItem
                        onClick={() => {
                          localStorage.setItem("language", "EN");
                          window.location.reload();
                        }}
                      >
                        EN 🇬🇧
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          localStorage.setItem("language", "RO");
                          window.location.reload();
                        }}
                      >
                        RO 🇷🇴
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>

          <Col xl={1} l={1} md={1} s={6} xs={6}>
            {isSmallScreen && (
              <div>
                <Offcanvas
                  backdrop={false}
                  direction="bottom"
                  fade={false}
                  isOpen={isBurgerOpen} // Controlled by state
                  toggle={setBurgerOpen} // Toggled by the button or close button inside
                  className="fullscreen-offcanvas"
                  style={{ zIndex: 99, overflowY: "hidden" }}
                  scrollable={false}
                  unmountOnClose={false}
                >
                  <OffcanvasBody className="sliding-background-color">
                    <Container>
                      <Row>
                        <a
                          href="/"
                          className="nav-text-font nav-text-large nav-option space-grotesk-1"
                        >
                          <span
                            className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                              currentRoute === "/home" || currentRoute === "/"
                                ? "nav-text-underline-sure"
                                : "nav-text-underline"
                            }`}
                          >
                            {navLang.home}
                          </span>
                        </a>
                      </Row>
                      <Row>
                        <a
                          href="/about"
                          className="nav-text-font nav-text-large nav-option space-grotesk-1"
                        >
                          <span
                            className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                              currentRoute == "/about"
                                ? "nav-text-underline-sure"
                                : "nav-text-underline"
                            }`}
                          >
                            {navLang.about}
                          </span>
                        </a>
                      </Row>
                      <Row>
                        <a
                          href="/packages"
                          className="nav-text-font nav-text-large nav-option space-grotesk-1"
                        >
                          <span
                            className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                              currentRoute == "/packages"
                                ? "nav-text-underline-sure"
                                : "nav-text-underline"
                            }`}
                          >
                            {navLang.packages}
                          </span>
                        </a>
                      </Row>
                      <Row>
                        <a
                          href="/contact"
                          className="nav-text-font nav-text-large nav-option space-grotesk-1"
                        >
                          <span
                            className={`"nav-button-color space-grotesk-1 inverted-color-text " ${
                              currentRoute == "/contact"
                                ? "nav-text-underline-sure"
                                : "nav-text-underline"
                            }`}
                          >
                            {navLang.contact}
                          </span>
                        </a>
                      </Row>
                      <br></br>
                      <Row>
                        {/* <UncontrolledDropdown className="">
                          <DropdownToggle nav caret className="">
                            <div className="">
                              Language
                            </div>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              onClick={() => {
                                localStorage.setItem("language", "EN");
                                window.location.reload();
                              }}
                            >
                              EN 🇬🇧
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                localStorage.setItem("language", "RO");
                                window.location.reload();
                              }}
                            >
                              RO 🇷🇴
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown> */}
                        <UncontrolledDropdown dark style={{ background: ".unset" }}>
                          <DropdownToggle
                            tag="span"
                            className="nav-text-font nav-text-large nav-option space-grotesk-1"
                          >
                            {" "}
                            <span className="nav-button-color space-grotesk-1 inverted-color-text" style={{fontSize:'2rem'}}>{navLang.language}</span>
                          </DropdownToggle>
                          <DropdownMenu dark>
                          <DropdownItem
                              onClick={() => {
                                localStorage.setItem("language", "EN");
                                window.location.reload();
                              }}
                            >
                              EN 🇬🇧
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                localStorage.setItem("language", "RO");
                                window.location.reload();
                              }}
                            >
                              RO 🇷🇴
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Row>
                    </Container>
                  </OffcanvasBody>
                </Offcanvas>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navigator;
