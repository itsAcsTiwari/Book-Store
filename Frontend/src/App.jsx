import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home'

import Courses from './Components/Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
