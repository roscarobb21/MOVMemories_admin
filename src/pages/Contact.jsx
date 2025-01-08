import { useState, useEffect } from "react";
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
import Booking from "../elements/Booking";
import Loader from "../pages/Loader";

import "./Contact.css";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Contact({langData, navData}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check
  const [emailValid, setEmailValid] = useState(undefined);
  const [generalError, setGeneralError] = useState("");
  const [submit, setSubmit] = useState(undefined);
  const [navLang, setNavLang] = useState(null)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [langFile, setLangFile] = useState(null)

  useEffect(() => {
    if (langData) setLangFile(langData);
    if (navData) setNavLang(navData);
  }, [langData, navData]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
      return;
    }
    if (
      formData.firstName.length === 0 ||
      formData.lastName.length === 0 ||
      formData.email.length === 0 ||
      formData.message.length === 0 ||
      formData.phoneNumber.length === 0
    ) {
      setGeneralError(langFile.contact_form.general_error);
      console.log(langFile.contact_form.general_error)
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

  if (langFile === null)
  {
    return <Loader />;
  }

  return (
    <div>
      <div style={{ minHeight: "100vh" }} className="background-dark-color">
        <Navigator lang={navLang} />
        <Container
          fluid
          style={{}}
          className="d-flex margin-from-header default-container-padding"
        >
          <Row
            style={{ heigh: "inherit" }}
            className="justify-content-center align-items-center"
          >
            <Col lg={6} md={12}>
              <Row>
                <div className="inverted-color-text space-grotesk-big-bold medium-text justify-text">
                  {langFile.header}
                </div>
              </Row>
              <br></br>
              <br></br>
              <Row>
                <div className="inverted-color-text space-grotesk-slim justify-text">
                  {/* Alternatively, you can email us @ info@movmemories.com or contact
              us on social media by pressing on your preferred one below */}
                  {langFile.body}
                </div>
              </Row>
            </Col>
            <Col lg={6} md={12}>
              {isMobile && <br></br>}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6} md={12}>
                    <FormGroup className="d-flex flex-column">
                      <FormFeedback invalid={generalError}>
                        {generalError}
                      </FormFeedback>
                      <Label for="firstName" className="form-label">
                        <span className="inverted-color-text space-grotesk-1">
                          {langFile.contact_form.first_name}
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
                  <Col lg={6} md={12}>
                    <FormGroup className="d-flex flex-column">
                      <Label for="lastName" className="form-label">
                        <span className="inverted-color-text space-grotesk-1">
                          {/* Last Name */}
                          {langFile.contact_form.last_name}
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
                  <FormGroup className="d-flex flex-column">
                    <Label for="email" className="form-label">
                      <span className="inverted-color-text space-grotesk-1">
                        {/* Email */}
                        {langFile.contact_form.email}
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
                      {langFile.contact_form.email_error}
                    </FormFeedback>
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup className="d-flex flex-column">
                    <Label for="number" className="form-label">
                      <span className="inverted-color-text space-grotesk-1">
                        {/* Phone Number */}
                        {langFile.contact_form.phone_number}
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
                    <Label for="message" className="mb-1 form-label">
                      <span className="inverted-color-text space-grotesk-1 left-text-alignment">
                        {/* Message */}
                        {langFile.contact_form.message}
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
                  <Col>
                    <FormGroup check>
                      <Input type="checkbox" />{" "}
                      <Label check>
                        {" "}
                        <span className="inverted-color-text space-grotesk-1 left-text-alignment">
                          I want to request a meeting
                        </span>
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex">
                    <Button outline className="contact-button">
                      {/* Submit */}
                      {langFile.contact_form.submit}
                    </Button>
                  </Col>
                </Row>
              </Form>
              {generalError?.length > 0 && (
                <Alert
                  color="danger"
                  onClick={() => {
                    setGeneralError("");
                  }}
                >
                  {generalError}
                </Alert>
              )}
              {submit && (
                <Alert
                  color="primary"
                  onClick={() => {
                    setSubmit(undefined);
                  }}
                >
                  {/* Form submitted. We will contact you asap 🥰 */}
                  {langFile.contact_form.submit_success}
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
        <div>
          <Booking lang={langFile.booking} />
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Contact;
