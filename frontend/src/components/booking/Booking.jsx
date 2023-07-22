import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import tourData from "../../assets/data/tours";

const Booking = ({ tour, avgRating }) => {

  const navigate = useNavigate();

  // destructure properties from tour object
  const { title } = tour;

  const { price, reviews } = tour;

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    tourSize: 1,
    guestSize: 1,
    bookAt: "",
  });
  // booking form handler
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you")
    console.log(credentials);
  };

  // Calculation total price
  const serviceFee = 5;
  const totalAmount =
    Number(price) * Number(credentials.tourSize) + Number(serviceFee);

  // For busticket system calculation
  // const totalAmount =
  //   Number(price) * Number(credentials.guestSize) + Number(serviceFee);


  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/ Per One Tour</span>
        </h3>
        <span className="tour__rating d-flex align-items-center justify-content-between">
          <i
            class="ri-star-fill"
            style={{ color: "var(--secondary-color)" }}
          ></i>{" "}
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>
      {/* booking form */}

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          
          {/* Title */}
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="text"
              placeholder={title}
              readOnly
            />
          </FormGroup>

          {/* Guest Name */}
          <FormGroup>
            <input
              type="text"
              placeholder="Guest Full Name"
              id="fullName"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="phone"
              min="10"
              max="15"
              placeholder="WhatsApp Number"
              id="phone"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              // placeholder="Booking Date"
              id="bookAt"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="number"
              min="1"
              placeholder="Guest Group Size"
              id="guestSize"
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="number"
              min="1"
              max="3"
              placeholder="1 Tour"
              id="tourSize"
              onChange={handleChange}
              readOnly
            />
          </FormGroup>
          
        </Form>
      </div>
      {/* end booking */}

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price}
              <i class="ri-close-line"></i>1 Tour
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
