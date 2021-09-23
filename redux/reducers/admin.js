import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    isAdmin: null,
    adminInfoLoaded: false
}

const admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setIsAdmin(state, action){
            state.isAdmin = action.payload;
        },
        setAdminInfoLoaded(state, action){
            state.adminInfoLoaded = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.admin,
            };
        },
    },
});

export const {
    setIsAdmin,
    setAdminInfoLoaded
} = admin.actions;

export default admin.reducer;