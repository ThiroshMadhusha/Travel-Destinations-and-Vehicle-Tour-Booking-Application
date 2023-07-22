import React from 'react'
import { Container, Row, Col } from "reactstrap";
import CommonContact from '../shared/CommonContact';

const Contact = () => {
  return (
    <>
      <CommonContact title={"Contact US"} />
      <section className="contact">
        <Container>
          <Row>
            <Col lg="4">Contacts</Col>
            <Col lg="8">Contact</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact
