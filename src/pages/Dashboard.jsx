import React from "react";
import { Container, Row, Col } from "reactstrap";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Header from "../elements/Header";
import BookingReqTable from "../elements/BookingReqTable";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign the user out
      navigate("/signin"); // Redirect to sign-in page
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div style={{backgroundColor:'black'}}>
      <Container fluid style={{backgroundColor:'black', height:'100vh'}}>
        <Row>
          <div style={{top: 0, left: 0, width: "100%" }}>
            <Header handleSignOut={handleSignOut} />
          </div>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
        <Col>
        <div className="inverted-color-text" style={{height:'auto'}}>
        <BookingReqTable/>
        </div>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
