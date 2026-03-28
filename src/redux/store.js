import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from './slice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})

export default store