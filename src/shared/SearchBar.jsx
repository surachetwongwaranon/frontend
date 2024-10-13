import React,{useRef} from 'react';
import './search-bar.css'
import { Col, Form, FormGroup } from 'react-bootstrap';

const SearchBar = () => {

    const locationRef = useRef('')
    
    const searchHandler = async() => {
        const location = locationRef.current.value

  
        if (location === '') {
           return alert('All fields are required!')
        }
     }

  return <Col lg='12'>
    <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group'>
                <span><i class='ri-map-pin-line'></i></span>
                <div>
                <h6>Location</h6>
                <input type="text" placeholder='Where are you going?' ref={locationRef}/>
                </div>
            </FormGroup>
            <span className='search__icon' type='submit' onClick={searchHandler}>
               <i class='ri-search-line'></i>
            </span>
        </Form>
    </div>
  </Col>
};

export default SearchBar