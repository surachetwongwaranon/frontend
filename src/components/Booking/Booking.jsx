import React, { useState, useEffect } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap' 
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/config'

const Booking = ({tour, avgRating}) => {

    const { price, reviews, title } = tour
    const navigate = useNavigate()


    const [booking, setBooking] = useState({
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: '',
        bookAt: ''
     })
    
     const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const serviceFee = 10
    const VAT = 0.10 * (Number(price) * Number(booking.guestSize))
    const totalAmount = (Number(price) * Number(booking.guestSize)) + VAT

    const validateForm = () => {
        const { fullName, phone, guestSize } = booking;
        return fullName && phone && guestSize > 0 ;
      };
    
      useEffect(() => {
        setIsDisabled(!validateForm()); 
      }, [booking]);

    const handleClick = async e => {
        e.preventDefault();

       navigate('/Payment')

    }


  return (
    <div className='booking'>
        <div className='booking__top d-flex align-items-center justify-content-between'>
            <h3>฿{price ? price.toLocaleString() : 'N/A'} <span> / ต่อคน</span></h3>
            <span className="tour__rating d-flex align-items-center">
                <i class='ri-star-fill'></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>
        <Form className='booking__info-form' onSubmit={handleClick}>
        <Button
            className="btn primary__btn w-100 mt-4"
            type="submit"
          >
            Book Now
          </Button>
          </Form>
    </div>
  )
}

export default Booking