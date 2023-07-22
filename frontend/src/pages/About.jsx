import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonAbout from "../shared/CommonAbout";

const About = () => {
  return (
    <>
      <CommonAbout title={"About US"} />
      <section className="about">
        <Container>
          <Row>
            <Col lg="12">Abot US</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
