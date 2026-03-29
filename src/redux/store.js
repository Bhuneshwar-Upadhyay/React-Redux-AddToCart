import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from './slice'
import wishlistReducer from './wishlistSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        wishlist: wishlistReducer
    }
})

export default store