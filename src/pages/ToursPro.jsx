import React from 'react';
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import { Container, Row, Col } from 'reactstrap';

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

const ToursPro = () => {


  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedToursCount`);



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
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-'>Loading.......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          <Row>
            {
              !loading && !error && featuredTours?.map(tour => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ToursPro;