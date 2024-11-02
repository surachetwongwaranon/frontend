import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import ToursPro from './../pages/ToursPro'
import ToursRating from './../pages/ToursRating'
import ThankYou from './../pages/ThankYou'
import Login from './../pages/Login'
import Register from './../pages/Register'
import AdminHome from '../pages/pages_admin/adminHome'
import AdminTourDetails from '../pages/pages_admin/AdminTourDetails'
import AddTour from '../pages/pages_admin/addTour'

import SearchResultList from './../pages/SearchResultList'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/tours' element={<Tours/>} />
      <Route path='/tour/:id' element={<TourDetails/>} />
      <Route path='/toursPro' element={<ToursPro/>} />
      <Route path='/toursRating' element={<ToursRating/>} />
      <Route path='/tours/search' element={<SearchResultList/>} />
      <Route path='/thank-you' element={<ThankYou/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/admin-home' element={<AdminHome/>} />
      <Route path='/admin-tour/:id' element={<AdminTourDetails/>} />
      <Route path='/add-tour' element={<AddTour/>} />
    </Routes>
  )
}

export default Routers