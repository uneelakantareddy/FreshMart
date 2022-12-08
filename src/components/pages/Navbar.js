import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ContentDisplay from '../Layout/ContentDisplay'
import './Navbar.scss'

const Navbar = (props) => {
  const [filter, setFilter] = useState(props.filterdata.totaldata)

  const totalDataHandler = () => {
    setFilter(props.filterdata.totaldata)
  }

  const fruitDataHandler = () => {
    setFilter(props.filterdata.fruitsdata)
  }

  const vegetablesDataHanlder = () => {
    setFilter(props.filterdata.vegetablesdata)
  }

  const leafyvegetablesDataHandler = () => {
    setFilter(props.filterdata.leafyvegetablesdata)
  }

  const grainsDataHanlder = () => {
    setFilter(props.filterdata.grainsdata)
  }

  return (
    <div>
      <nav className="navbar">
        <NavLink className="navbar__link" to="/Home" onClick={totalDataHandler}>
          Home
        </NavLink>

        <NavLink
          className="navbar__link"
          to="/Fruits"
          onClick={fruitDataHandler}
        >
          Fruits
        </NavLink>
        <NavLink
          className="navbar__link"
          to="/Vegetables"
          onClick={vegetablesDataHanlder}
        >
          vegetables
        </NavLink>
        <NavLink
          className="navbar__link"
          to="/LeafyVegetables"
          onClick={leafyvegetablesDataHandler}
        >
          LeafyVegetables
        </NavLink>
        <NavLink
          className="navbar__link"
          to="/Grains"
          onClick={grainsDataHanlder}
        >
          Grains
        </NavLink>
      </nav>
      {<ContentDisplay data={filter} />}
    </div>
  )
}

export default Navbar
