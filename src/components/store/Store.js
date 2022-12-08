import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './UiSlice'
import CartSlice from './Cart-slice'

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: CartSlice.reducer },
})
export default store
