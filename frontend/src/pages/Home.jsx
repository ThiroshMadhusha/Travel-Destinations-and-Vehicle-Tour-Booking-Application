import React from 'react'
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/sigiriya.jpg";
import heroImg02 from "../assets/images/waterfall.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";

// import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured/FeaturedTourList";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import experienceImg from "../assets/images/van2.png"
import Testimonials from "../components/testimonials/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      {/* Hero Section Start */}
      <section>
        <Container>
          <Row>
            {/* Col lg='6' mean main page eka 2ta bedala ek apaththaka width eka 6 + 6 =12 */}
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go..!"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling Opens the Door to Creating{" "}
                  <span className="highlight">Memories.</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus aliquid eveniet omnis ut exercitationem maxime
                  aperiam aut minus eum laborum, illum quia nostrum deserunt
                  voluptatibus autem modi odio sapiente. Placeat.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="img1" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video
                  src={heroVideo}
                  alt="video1"
                  controls
                  autoPlay
                  loop
                  muted
                />
              </div>
            </Col>{" "}
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="img2" />
              </div>
            </Col>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>
      {/* End Hero Section */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Feature tour section */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* End Feature */}

      {/* Start Experience */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__img">
                <Subtitle subtitle={"Experience"} />

                <img src={experienceImg} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__content">
                {/* <Subtitle subtitle={"Experience"} /> */}

                <h2>
                  With Our All Experience <br /> We Will Serve You..!
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate repellendus quos, unde, voluptas soluta nostrum,
                  commodi facere adipisci debitis dolor vel odio nesciunt
                  laudantium dignissimos voluptatem eum aut quasi. Sapiente.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>1k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>10+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            {/* <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      {/* end Experience */}

      {/* Gallery Section */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit Our Customer's Tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* End Gallery */}

      {/* Testimonial Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What Our Fans Say About US</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* End testimonia */}

      {/* Newsletter Stsre */}
      <NewsLetter />
      {/* End Newsletter */}
    </>
  )
}

export default Home