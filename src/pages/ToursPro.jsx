import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';

import '../styles/tour.css';
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import { Container, Row, Col } from 'reactstrap';

const ToursPro = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const featuredTours = tourData.filter((tour) => tour.featured === true);

  useEffect(() => {
    const pages = Math.ceil(featuredTours.length / 4); // สมมติว่าแสดง 4 ทัวร์ต่อหน้า
    setPageCount(pages);
  }, [featuredTours]);

  return (
    <>
      <CommonSection title={'All Featured Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {featuredTours?.map((tour) => (
              <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ToursPro;