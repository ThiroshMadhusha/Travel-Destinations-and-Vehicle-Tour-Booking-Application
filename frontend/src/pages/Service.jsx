import React from 'react'
import { Container, Row, Col } from "reactstrap";
import CommonService from '../shared/CommonService';

const Service = () => {
    return (
        <>
          <CommonService title={"OUR Services"} />
          <section className="contact">
            <Container>
              <Row>
                <Col lg="4">Contact</Col>
                <Col lg="8">Contact</Col>
              </Row>
            </Container>
          </section>
        </>
      );
    }
export default Service