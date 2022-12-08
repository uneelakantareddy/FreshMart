import { createSlice } from '@reduxjs/toolkit'

const Cartslice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemtoCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          //   rQuantity:newItem.rQuantity,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          parseInt(existingItem.price) + parseInt(newItem.price)
      }
    },
    removeItemfromCart(state, action) {
      const id = action.payload.id
      console.log(id)
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      if (existingItem.id.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
        existingItem.totalPrice =
          parseInt(existingItem.totalPrice) - parseInt(existingItem.price)
      } else {
        existingItem.totalPrice =
          parseInt(existingItem.totalPrice) - parseInt(existingItem.price)
        existingItem.quantity--
      }
    },
  },
})

export const cartActions = Cartslice.actions
export default Cartslice
