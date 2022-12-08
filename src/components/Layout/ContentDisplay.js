import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/Cart-slice'
import './ContentDisplay.scss'

const ContentDisplay = (props) => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <div className="wraper">
        {props.data.map((item) => {
          return (
            // <div>
            <div className="item__div" key={item.id}>
              <img className="item__img" src={item.image} alt="food" />
              <div className="item__name">
                <h2>{item.name}</h2>
              </div>
              <div className="item__price">
                <h3>{'Price : Rs. ' + item.price}</h3>
                <div>
                  <button
                    className="AddCartbutton"
                    onClick={() => {
                      dispatch(
                        cartActions.addItemtoCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          hQuantity: item.quantity,
                        }),
                      )
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              {/* </div> */}
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default ContentDisplay
