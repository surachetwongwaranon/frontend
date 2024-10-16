import React, { useEffect, useRef } from 'react'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import "./Header.css"

const nav__links = [
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

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
     window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
           headerRef.current.classList.add('sticky__header')
        } else {
           headerRef.current.classList.remove('sticky__header')
        }
     })
  }

  useEffect(() => {
     stickyHeaderFunc()

     return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
     <header className='header' ref={headerRef}>
        <Container>
           <Row>
              <div className="nav__wrapper d-flex align-items-center justify-content-between">
                 <div className="logo">
                    <img src={Logo} alt="" />
                 </div>

                 <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu d-flex align-items-center gap-4">
                       {
                          nav__links.map((item, index) => (
                             <li className="nav__item" key={index}>
                                <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                             </li>
                          ))
                       }
                    </ul>
                 </div>
              </div>
           </Row>
        </Container>
     </header>
  )
}

export default Header