import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {LOCALES} from "../../intl/locales";

const initialState = {
    cart: null,
    cartLoaded: false,
    wishlist: null,
    wishlistLoaded: false,
    locale: LOCALES.KYRGYZ
}

const main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCart(state, action){
            state.cart = action.payload;
        },
        setCartLoaded(state, action){
            state.cartLoaded = action.payload;
        },
        setWishlist(state, action){
            state.wishlist = action.payload;
        },
        setWishlistLoaded(state, action){
            state.wishlistLoaded = action.payload;
        },
        setLocale(state, action){
            state.locale = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.main,
            };
        },
    },
});

export const {
    setCart,
    setCartLoaded,
    setWishlist,
    setWishlistLoaded,
    setLocale
} = main.actions;

export default main.reducer;