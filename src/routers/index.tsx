import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Index from '../views'
import Home from '../views/home'
import Blogs from '../views/blogs'
import Bbs from '../views/bbs'
export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Index/>} >
        <Route path='home' element = {<Home/>}/>
        <Route path='blogs' element = {<Blogs/>}/>
        <Route path='bbs' element = {<Bbs/>}/>
      </Route>
    </Routes>
  )
}
