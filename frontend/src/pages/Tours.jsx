import React, { useState, useEffect } from "react";
import CommonSection from '../shared/CommonSection'
import"../styles/tour.css";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";
// import SearchBar from "../shared/SearchBar";
import NewsLetter from "../shared/NewsLetter";
import { Container, Row, Col } from "reactstrap";

const Tours = () => {
    // Add pagination
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
      const pages = Math.ceil(5 / 4);
      setPageCount(pages);
      window.scrollTo(0, 0);
    }, [page]);

  return (
    <>
      <CommonSection title={"All Tours"} /> 

      <section>
        <Container className='pt-0'>
          <Row>
            {
              tourData?.map(tour => (
                <Col lg='3' key={tour.id}>
                  <TourCard tour={tour} />
                </Col>)
              )
            }

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {
                  [ ...Array(pageCount).keys()].map(number=>(
                    <span key={number} onClick={()=>setPage(number)}
                    className={page === number ? 'active__page':''}
                    >
                      {number + 1}
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default Tours