import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/Cart-slice'
import './CartData.scss'

const CartData = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <div className="container">
        <div className="container__cart">
          {cartItems.map((item) => {
            let totalAmount = item.price * item.quantity

            return (
              <div key={item.id}>
                <div className="product">
                  {/* <div > */}
                  <img className="product__img" src={item.image} alt="item" />
                  <div className="product__info">
                    <h3 className="product__name">{item.name}</h3>
                    <h4 className="product__price">{` Rs. ${item.price} x ${item.quantity} =  
                     Rs. ${totalAmount}`}</h4>

                    <button
                      className="product__add"
                      onClick={() => {
                        dispatch(
                          cartActions.addItemtoCart({
                            id: item.id,
                            price: item.price,
                            quantity: item.quantity,
                          }),
                        )
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="product__remove"
                      onClick={() => {
                        dispatch(
                          cartActions.removeItemfromCart({
                            id: item.id,
                          }),
                        )
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartData
