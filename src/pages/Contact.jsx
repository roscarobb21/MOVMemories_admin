import Navigator from "../elements/Navbar";
import { Container, Row, Col } from "reactstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";

import Socials from "../elements/Socials";

import "./Contact.css";

function Contact() {
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
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="first_name" className="left-aligned-label">
                    <span className="inverted-color-text space-grotesk-1">
                      First Name
                    </span>
                  </Label>
                  <Input valid={undefined} />
                  <FormFeedback valid></FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="last_name" className="left-aligned-label">
                    <span className="inverted-color-text space-grotesk-1">
                      Last Name
                    </span>
                  </Label>
                  <Input valid={undefined} />
                  <FormFeedback valid></FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="last_name" className="left-aligned-label">
                  <span className="inverted-color-text space-grotesk-1">
                    Email
                  </span>
                </Label>
                <Input valid={undefined} />
                <FormFeedback valid></FormFeedback>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="d-flex flex-column">
                <Label for="message" className="mb-1">
                  <span className="inverted-color-text space-grotesk-1 left-text-alignment">
                    Message
                  </span>
                </Label>
                <Input id="message" name="text" type="textarea" />
              </FormGroup>
            </Row>
            <Row>
              <Button outline style={{ width: "33%" }}>
                Submit
              </Button>
            </Row>
          </Form>
        </Container>
        <Socials />
      </div>
    </div>
  );
}

export default Contact;
