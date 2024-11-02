import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/tour.css'
import AdminTourCard from './AdminTourCard';
import { Container, Row, Col, Button } from 'reactstrap';

import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const AdminHome = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
    const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

    const navigate = useNavigate();

    useEffect(() => {
        const pages = Math.ceil(tourCount / 8)
        setPageCount(pages)
        window.scrollTo(0, 0)
    }, [page, tourCount, tours])

    const handleAddTour = () => {
        navigate('/add-tour'); // Navigate to "Add Tour" page
    };

    return (
        <>
            <br />
            <section className='pt-0'>
                <Container>
                    <Row className="mb-4">
                        <Col className="d-flex justify-content-end">
                            <Button onClick={handleAddTour} style={{ backgroundColor: 'var(--primary-color)', border: 'none' }}>
                                <i className="ri-add-fill" style={{ color: '#fff', fontSize: '24px' }}></i>
                            </Button>
                        </Col>
                    </Row>
                    {loading && <h4 className='text-center pt-'>Loading.......</h4>}
                    {error && <h4 className='text-center pt-5'>{error}</h4>}

                    {
                        !loading && !error &&
                        <Row>
                            {
                                tours?.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}> <AdminTourCard tour={tour} /> </Col>))
                            }
                            <Col lg='12'>
                                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                                    {[...Array(pageCount).keys()].map(number => (
                                        <span key={number} onClick={() => setPage(number)}
                                            className={page === number ? 'active__page' : ''}
                                        >
                                            {number + 1}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    }
                </Container>
            </section>
        </>
    );
};

export default AdminHome