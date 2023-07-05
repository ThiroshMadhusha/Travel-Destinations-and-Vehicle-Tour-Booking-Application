import React from 'react'
import "./commonabout.css"
import { Container, Row, Col } from "reactstrap";

const CommonAbout = ({ title }) => {
  return (
    <section className="common__about">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default CommonAbout