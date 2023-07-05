import React from 'react'
// import tours from '../assets/data/tours'
import { Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import "./tourcard.css";

// import reviews rating counter
import calculateAvgRating from '../utils/avgRating';

const TourCard = ({ tour }) => {

  const {id, title, city, photo, price, featured, reviews} = tour

  const {avgRating, totalRating} = calculateAvgRating(reviews);
  
  // reviews rating counter
  // const totalRating = reviews?.reduce((acc,item)=> acc + item.rating, 0)
  // const avgRating = totalRating === 0 ?'' : totalRating === 1 ? totalRating : totalRating / reviews?.length;
  // end reviews rating counter
  return (
    <div className='tour__card'>
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>

            {/* rating counter */}
            <span className="tour__rating d-flex align-items-center justify-content-between gap-1">
              <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
            {/* end ratig counter */}
          </div>

        <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price}
              <span>/per tour</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>

    </div>
  )
}

export default TourCard