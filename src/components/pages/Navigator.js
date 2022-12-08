import React from 'react'

import { Route, Routes } from 'react-router-dom'

import LoginForm from '../Login/LoginForm'
import SignupForm from '../Login/SignupForm'
import FreshmartData from '../Api/FreshmartData'
import CartData from '../cart/CartData'

// import Navbar from './Navbar'
// import { useSelector } from 'react-redux'

const Navigator = () => {
  // const showCart = useSelector((state) => state.ui.cartIsVisible)

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Home" element={<FreshmartData />} />
        <Route path="/Fruits" element={<FreshmartData />} />
        <Route path="/Vegetables" element={<FreshmartData />} />
        <Route path="/LeafyVegetables" element={<FreshmartData />} />
        <Route path="/Grains" element={<FreshmartData />} />
        <Route path="/cart" element={<CartData />} />
        <Route path="/*" />
      </Routes>
    </div>
  )
}

export default Navigator
