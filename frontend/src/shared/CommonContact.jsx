import React from 'react'
import "./commoncontact.css"
import { Container, Row, Col } from "reactstrap";

const CommonContact = ({ title }) => {
    return (
      <section className="common__contact">
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


export default CommonContact