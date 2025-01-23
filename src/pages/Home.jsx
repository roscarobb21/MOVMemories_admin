import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
// import Navigator from "../elements/Navbar";
import CredentialsSignInPage from "../elements/SignIn";

import "./Home.css";

function Home({ langData, navData }) {
  const [langFile, setLangFile] = useState(null);
  const [navLang, setNavLang] = useState(null);

  useEffect(() => {
    if (langData) setLangFile(langData);
    if (navData) setNavLang(navData);
  }, [langData, navData]);

  if (!langFile || !navLang) {
    return <span>LOADING</span>;
  }
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="background-dark-color min-height"
    >
      <div className="background-dark-color min-height">
        <Container fluid style={{ width: "100%", padding: 0 }}>
          <CredentialsSignInPage />
        </Container>
      </div>
    </div>
  );
}

export default Home;
