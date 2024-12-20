import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links = [
  {
    path: '/home',
    display: 'หน้าหลัก'
 },
 {
    path: '/toursPro',
    display: 'ทัวร์ดีลลดราคาพิเศษ'
 },
 {
    path: '/toursRating',
    display: 'ทัวร์เที่ยวยอดนิยม'
 },
 {
   path: '/tours',
   display: 'ทัวร์ทั้งหมด'
},
]


const Footer = () => {


   return (
      <footer className='footer'>
         <Container>
            <Row>
               <Col lg='3'>
                  <div className="logo">
                     <img src={logo} alt="" />
                     <p>ศูนย์บริการลูกค้า<br/>ระบบจองทัวร์ออนไลน์เชื่อมทัวร์<br/>เปิดบริการทุกวัน 07.00 - 18.00 น.</p>
                     <div className="social__link d-flex align-items-center gap-4">
                        <span>
                           <Link to='#'>
                              <i class='ri-line-line'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='#'>
                              <i class='ri-facebook-circle-line'></i>
                           </Link>
                        </span>

                     </div>
                  </div>
               </Col>

               <Col lg='3' className="col">
                  <h5 className="footer__link-title">Discover</h5>

                  <ListGroup className='footer__quick-links'>
                     {
                        quick__links.map((item, index) => (
                           <ListGroupItem key={index} className='ps-0 border-0'>
                              <Link to={item.path}>{item.display}</Link>
                           </ListGroupItem>
                        ))
                     }
                  </ListGroup>
               </Col>
               
               <Col lg='5'className="col">
                  <h5 className="footer__link-title">Contact</h5>

                  <ListGroup className='footer__quick-links'>
                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-map-pin-line'></i></span>
                           Address:
                        </h6>
                        <p className='mb-0'>199 หมู่ที่ 6 ถนนสุขุมวิท ตำบลทุ่งสุขลา อำเภอศรีราชา ชลบุรี 20230</p>
                     </ListGroupItem>

                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-mail-line'></i></span>
                           Email:
                        </h6>

                        <p className='mb-0'>cheumtours@gmail.com</p>
                     </ListGroupItem>

                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-phone-fill'></i></span>
                           Phone:
                        </h6>

                        <p className='mb-0'>02-987-6543</p>
                     </ListGroupItem>
                  </ListGroup>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}

export default Footer