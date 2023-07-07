import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

// import footer links
const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
 
];
const general__links = [
  {
    path: "/#",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
 
];
const condition__links = [
  {
    path: "/#",
    display: "Tours",
  },
  {
    path: "/#",
    display: "Lands",
  },
  {
    path: "/#",
    display: "Rooms",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={Logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae earum, dicta ratione atque ipsa ullam?
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-whatsapp-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-twitter-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="2">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-9 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2">
            <h5 className="footer__link-title">Generals</h5>
            <ListGroup className="footer__quick-links">
              {general__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-9 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2">
            <h5 className="footer__link-title">Visit Links</h5>
            <ListGroup className="footer__quick-links">
              {condition__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-9 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact US</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                    Address :
                  </span>
                </h6>
                <p className="mb-0">Tangalle, Sri Lanka</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                    Email :
                  </span>
                </h6>
                <p className="mb-0">cutravels@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                    Phone :
                  </span>
                </h6>
                <p className="mb-0">+94 77 346 7723</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright ©{year}, Design & Develop by Thirosh Madhusha. All right
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
