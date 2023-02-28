import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import Project from '../Components/Project'
import Skills from '../Components/Skills'
import Home from './Home'

const Router = () => {

  // return (
    <Routes>
        <Route path="/" element={ <Main/> }></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/projects" element={<Project/>}></Route>
        {/* <Route path="" element={}></Route> */}
    </Routes>
  // )
}

export default Router
