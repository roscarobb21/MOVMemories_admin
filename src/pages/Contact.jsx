import { useState } from "react";
import Navigator from "../elements/Navbar";
import { Container, Row, Col } from "reactstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert,
  Button,
} from "reactstrap";
import { db, collection, addDoc } from "../firebase";

import Socials from "../elements/Socials";

import "./Contact.css";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Contact() {
  const [emailValid, setEmailValid] = useState(undefined);
  const [generalError, setGeneralError] = useState("");
  const [submit, setSubmit] = useState(undefined)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && emailValid) {
      setEmailValid(undefined);
    }
    setGeneralError("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      setEmailValid(true);
      console.log("email invalid " + formData.email);
      return;
    }
    if (
      formData.firstName.length === 0 ||
      formData.lastName.length === 0 ||
      formData.email.length === 0 ||
      formData.message.length === 0 ||
      formData.phoneNumber.length === 0
    ) {
      setGeneralError("Please fill out the form 🥰");
      return;
    }
    // Save form data to Firestore
    try {
      // Add the form data to Firestore 'contact-messages' collection
      await addDoc(collection(db, "contact-messages"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber,
        createdAt: new Date(), // Optionally add timestamp
      });

      setStatusMessage("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phoneNumber: "",
      }); // Reset the form
      setSubmit(true)
    } catch (error) {
      setStatusMessage("Error submitting the form: " + error.message);
    }
  };

  return (
    <div>
      <div style={{ minHeight: "100vh" }} className="background-dark-color">
        <Navigator props={1} />
        <Container>
          <Row>
            <div className="inverted-color-text space-grotesk-1 medium-text">
              Fill out the form below, and we'll get back to you faster than you
              can say “I do.”{" "}
            </div>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <div className="inverted-color-text space-grotesk-1">
              Alternatively, you can email us @ info@movmemories.com or contact
              us on social media by pressing on your preferred one below
            </div>
          </Row>
          <br></br>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <FormFeedback invalid={generalError}>
                    {generalError}
                  </FormFeedback>
                  <Label for="firstName" className="left-aligned-label">
                    <span className="inverted-color-text space-grotesk-1">
                      First Name
                    </span>
                  </Label>
                  <Input
                    value={formData.firstName}
                    valid={undefined}
                    onChange={handleChange}
                    id="firstName"
                    name="firstName"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="lastName" className="left-aligned-label">
                    <span className="inverted-color-text space-grotesk-1">
                      Last Name
                    </span>
                  </Label>
                  <Input
                    value={formData.lastName}
                    valid={undefined}
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="email" className="left-aligned-label">
                  <span className="inverted-color-text space-grotesk-1">
                    Email
                  </span>
                </Label>
                <Input
                  value={formData.email}
                  invalid={emailValid}
                  onChange={handleChange}
                  id="email"
                  name="email"
                />
                <FormFeedback invalid={generalError}>
                  Please provide valid email address 🥰
                </FormFeedback>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label for="number" className="left-aligned-label">
                  <span className="inverted-color-text space-grotesk-1">
                    Phone Number
                  </span>
                </Label>
                <Input
                  value={formData.phoneNumber}
                  valid={undefined}
                  onChange={handleChange}
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="d-flex flex-column">
                <Label for="message" className="mb-1">
                  <span className="inverted-color-text space-grotesk-1 left-text-alignment">
                    Message
                  </span>
                </Label>
                <Input
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  type="textarea"
                />
              </FormGroup>
            </Row>
            <Row>
              <Button outline style={{ width: "33%" }}>
                Submit
              </Button>
            </Row>
          </Form>
          {generalError.length > 0 && (
            <Alert
              color="danger"
              onClick={() => {
                setGeneralError("");
              }}
            >
              {generalError}
            </Alert>
          )}
          {submit && <Alert
              color="primary"
              onClick={() => {
                setSubmit(undefined);
              }}
            >
              Form submitted. We will contact you asap 🥰
            </Alert>}
        </Container>
        <Socials />
      </div>
    </div>
  );
}

export default Contact;
