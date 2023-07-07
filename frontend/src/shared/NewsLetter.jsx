import React from "react";
import "./news.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/van1.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe Now to Get Useful Travelling Informations..!</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter Your Email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Subscribe to our MailChimp newsletter and stay up to date with
                all new updates coming straight in your mailbox:
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
