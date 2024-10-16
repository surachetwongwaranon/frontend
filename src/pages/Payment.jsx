import React, { useState } from 'react';
import '../styles/payment.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button, Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import QrPaymentImg from '../assets/images/qr-payment.jpg'

const Payment = () => {
    const navigate = useNavigate();

    // State for form fields
    const [guestSize, setGuestSize] = useState('');
    const [phone, setPhone] = useState('');
    const [fullName, setFullName] = useState('');
    const [receipt, setReceipt] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const price = 59900;
    const serviceFee = 10; // Assuming this is a percentage

    // Calculating VAT and totalAmount based on guestSize
    const VAT = 0.10 * (Number(price) * Number(guestSize));
    const totalAmount = (Number(price) * Number(guestSize)) + VAT;

    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/thank-you');
    };

    const handleFileChange = (e) => {
        setReceipt(e.target.files[0]); // Set the uploaded file
    };

    // Determine if the form is valid (all fields filled)
    const isFormValid = fullName && phone && guestSize && receipt;

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="payment__form">
                            <h4>Information</h4>
                            <Form onSubmit={handleClick}>
                                <FormGroup className="d-flex align-items-center gap-3">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center gap-3">
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center gap-3">
                                    <input
                                        type="number"
                                        placeholder="Guest"
                                        id="guestSize"
                                        value={guestSize}
                                        onChange={(e) => setGuestSize(Number(e.target.value))}
                                        required
                                    />
                                </FormGroup>

                                <div>
                                    <ListGroup>
                                        <ListGroupItem className="border-0 px-0">
                                            <h5 className="d-flex align-items-center gap-1">
                                                ฿{price ? price.toLocaleString() : 'N/A'} <i className="ri-close-line"></i> {guestSize} คน
                                            </h5>
                                            <span> ฿{price ? price.toLocaleString() : 'N/A'}</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="border-0 px-0">
                                            <h5>VAT</h5>
                                            <span>{serviceFee}%</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="border-0 px-0 total">
                                            <h5>Total</h5>
                                            <span>฿{totalAmount ? totalAmount.toLocaleString() : ''}</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <br />
                                    <div className="img-box">
                                        <img src={QrPaymentImg} alt="" />
                                    </div>

                                    <h5>Upload a photo of your receipt</h5>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        required
                                    />

                                    {errorMessage && (
                                        <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                                            {errorMessage}
                                        </div>
                                    )}

                                    <Button
                                        className="btn primary__btn w-100 mt-4"
                                        type="submit"
                                        disabled={!isFormValid} // Disable button if form is not valid
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Payment;