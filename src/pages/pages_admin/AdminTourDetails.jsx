import React, { useState, useEffect } from 'react';
import './admin-tour-details.css';
import { Container, Row, Col, Form, Button, Input } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const AdminTourDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    // State for editable fields
    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState('');
    const [featured, setFeatured] = useState(false);

    useEffect(() => {
        if (tour) {
            setTitle(tour.title);
            setCity(tour.city);
            setAddress(tour.address);
            setPrice(tour.price);
            setDesc(tour.desc);
            setPhoto(tour.photo);
            setFeatured(tour.featured);
        }
    }, [tour]);

    const handleUpdate = async () => {
        const updatedTour = {
            title,
            city,
            address,
            price: parseFloat(price),
            desc,
            photo,
            featured,
        };

        try {
            const res = await fetch(`${BASE_URL}/tours/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updatedTour),
            });

            const result = await res.json();
            if (!res.ok) {
                return alert(result.message);
            }
            alert('Tour updated successfully!');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this tour?')) {
            try {
                const res = await fetch(`${BASE_URL}/tours/${id}`, {
                    method: 'DELETE',
                });

                const result = await res.json();
                if (!res.ok) {
                    return alert(result.message);
                }
                alert('Tour deleted successfully!');
                navigate('/admin-home'); 
            } catch (error) {
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tour]);

    return (
        <section>
            <Container>
                {loading && <h4 className='text-center pt-5'>LOADING.........</h4>}
                {error && <h4 className='text-center pt-5'>{error}</h4>}
                {
                    !loading && !error &&
                    <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt="" />
                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span><i className='ri-map-pin-fill'></i> {address}</span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i className='ri-map-pin-2-line'></i> {city}</span>
                                        <span><i className='ri-money-dollar-circle-line'></i> {price ? price.toLocaleString() : 'N/A'} / ต่อคน</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="tour__info">
                                <Form onSubmit={e => { e.preventDefault(); handleUpdate(); }}>
                                    <h4>Edit Tour Details</h4>
                                    <input className="Input__info" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                                    <input className="Input__info" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
                                    <input className="Input__info" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                                    <input className="Input__info" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                                    <input className="Input__info" type="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
                                    <input className="Input__info" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo URL" />
                                    <h6>Featured SALE</h6>
                                    <select value={featured} onChange={(e) => setFeatured(e.target.value === 'true')}>
                                        <option value={true}>SALE</option>
                                        <option value={false}>NOT SALE</option>
                                    </select>
                                    <br/><br/>
                                    <Button className='btn primary__btn' style={{marginRight: '2rem'}}>Update Tour</Button>
                                    <Button className='btn btn-danger' onClick={handleDelete}>Delete Tour</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </section>
    );
};

export default AdminTourDetails;
