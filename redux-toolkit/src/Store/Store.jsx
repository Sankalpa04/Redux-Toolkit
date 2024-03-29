import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './CartSlice'
import cartReducer from './CartSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer, 
    }
})

export default store