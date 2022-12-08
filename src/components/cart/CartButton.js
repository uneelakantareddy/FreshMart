import React from 'react'
import './CartButton.scss'
import { NavLink } from 'react-router-dom'
import CartIcon from './CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/UiSlice'

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const toggleCartHanlder = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <NavLink style={{ textDecoration: 'none' }} to="/cart">
      <button className="headerButton" onClick={toggleCartHanlder}>
        <span className="headerButton__icon">{<CartIcon />}</span>
        <span className="headerButton__name">Your Cart</span>
        <span className="headerButton__badge">{cartQuantity}</span>
      </button>
    </NavLink>
  )
}

export default CartButton
