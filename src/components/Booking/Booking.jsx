import React, { useState, useEffect } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap' 
import { useNavigate } from 'react-router-dom'

const Booking = ({tour, avgRating}) => {

    const { price, reviews } = tour
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: '',
        bookAt: ''
     })
    
     const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    const validateForm = () => {
        const { fullName, phone, guestSize, bookAt } = credentials;
        return fullName && phone && guestSize > 0 && bookAt;
      };
    
      useEffect(() => {
        setIsDisabled(!validateForm()); 
      }, [credentials]);

    const handleClick = async e => {
        e.preventDefault()
        
        navigate('/thank-you')
    }


  return (
    <div className='booking'>
        <div className='booking__top d-flex align-items-center justify-content-between'>
            <h3>฿{price} <span>/ต่อคน</span></h3>
            <span className="tour__rating d-flex align-items-center">
                <i class='ri-star-fill'></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        <div className='booking__form'>
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
                <FormGroup className='d-flex align-items-center gap-3'>
                <input type="text" placeholder='Full Name' id='fullName' required
                     onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                <input type="number" placeholder='Phone' id='phone' required
                     onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' required
                     onChange={handleChange} />
                <input type="number" placeholder='Guest' id='guestSize' required
                     onChange={handleChange} />
                </FormGroup>

                <div className="booking__bottom">
            <ListGroup>
               <ListGroupItem className='border-0 px-0'>
                  <h5 className='d-flex align-items-center gap-1'>฿{price} <i class='ri-close-line'></i> {credentials.guestSize} คน</h5>
                  <span> ฿{price}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0'>
                  <h5>VAT</h5>
                  <span>{serviceFee}%</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0 total'>
                  <h5>Total</h5>
                  <span>฿{totalAmount}</span>
               </ListGroupItem>
            </ListGroup>

            <Button
            className="btn primary__btn w-100 mt-4"
            type="submit"
            disabled={isDisabled}
          >
            Book Now
          </Button>
        </div>
            </Form>
        </div>
    </div>
  )
}

export default Booking