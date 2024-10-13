import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import ToursPro from './../pages/ToursPro'
import ToursSingle from './../pages/ToursSingle'
import SearchResultList from './../pages/SearchResultList'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/tours' element={<Tours/>} />
      <Route path='/tour/:id' element={<TourDetails/>} />
      <Route path='/toursPro' element={<ToursPro/>} />
      <Route path='/toursSingle' element={<ToursSingle/>} />
      <Route path='/tour/search' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers