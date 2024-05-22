import React from 'react'
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home'

import Courses from './Components/Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Components/context/AuthProvider'



const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Toaster />

    </>
  )
}

export default App
