import React from 'react'
import "./commonservice.css"
import { Container, Row, Col } from "reactstrap";

const CommonService = ({ title }) => {
    return (
      <section className="common__service">
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


export default CommonService