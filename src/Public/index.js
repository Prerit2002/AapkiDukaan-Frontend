import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Homepage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import SignUp from './Components/SignUp';

function PublicMain() {
    return (
        <div>
        <Navbar />
        <Routes>
        
        <Route path="" element={<Home />} ></Route>
        <Route path="about" element={<About />} ></Route>
        <Route path="pricing" element={<Pricing />} ></Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="signup" element={<SignUp />} ></Route>
        </Routes>
        </div>

    )
}

export default PublicMain
