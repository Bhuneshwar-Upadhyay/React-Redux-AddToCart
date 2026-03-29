import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishlistItems: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []
}

export const addToWishlist = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            state.wishlistItems.push(action.payload)
            localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
        },
        removeWishlist: (state, action) => {
            const wishlistData = state.wishlistItems.filter(item => item.id != action.payload.id)
            state.wishlistItems = wishlistData
            localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems))
        }
    }
})

export const { addWishlist, removeWishlist } = addToWishlist.actions;
export default addToWishlist.reducer;