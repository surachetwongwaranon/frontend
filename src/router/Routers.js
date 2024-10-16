import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import ToursPro from './../pages/ToursPro'
import ToursRating from './../pages/ToursRating'
import ThankYou from './../pages/ThankYou'
import Payment from './../pages/Payment'

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
      <Route path='/Payment' element={<Payment/>} />
    </Routes>
  )
}

export default Routers