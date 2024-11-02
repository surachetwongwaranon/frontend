import React, { useState, useEffect } from 'react';
import './admin-tour-details.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'reactstrap';
import { BASE_URL } from '../../utils/config';

const AddTour = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState('');
    const [featured, setFeatured] = useState(false);

    const handleCreate = async () => {
        const createTour = {
            title,
            city,
            address,
            price: parseFloat(price),
            desc,
            photo,
            featured,
        };

        try {
            const res = await fetch(`${BASE_URL}/tours/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(createTour),
            });

            const result = await res.json();
            if (!res.ok) {
                return alert(result.message);
            }
            alert('Tour updated successfully!');
            navigate('/admin-home'); 
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    },);

    return (
        <section>
            <Container>
                {
                    <Row>
                        <Col lg='8'>
                            <br/>
                            <div className="tour__info">
                                <Form onSubmit={e => { e.preventDefault(); handleCreate(); }}>
                                    <h4>Edit Tour Details</h4>
                                    <input className="Input__info" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                                    <input className="Input__info" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
                                    <input className="Input__info" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                                    <input className="Input__info" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                                    <textarea className="Input__info" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
                                    <input className="Input__info" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="File or Photo URL" />
                                    <h6>Featured SALE</h6>
                                    <select value={featured} onChange={(e) => setFeatured(e.target.value === 'true')}>
                                        <option value={true}>SALE</option>
                                        <option value={false}>NOT SALE</option>
                                    </select>
                                    <br/><br/>
                                    <Button className='btn primary__btn' style={{marginRight: '2rem'}} onClick={handleCreate}>
                                        Create Tour
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </section>
    );
};

export default AddTour;