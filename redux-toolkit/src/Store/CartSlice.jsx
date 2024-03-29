import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    amount: 0,
    total:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,   
    reducers:{
        addToCart: (state, action)=>{
            const product = action.payload;
            state.cartItems.push(product)
            }
        },
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;