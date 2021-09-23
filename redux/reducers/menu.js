import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    catalogIsOpen: false,
    subCatalogIsOpen: false
}

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setCatalogIsOpen(state, action){
            state.catalogIsOpen = action.payload;
        },
        setSubCatalogIsOpen(state, action){
            state.subCatalogIsOpen = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.menu,
            };
        },
    },
});

export const {
    setCatalogIsOpen,
    setSubCatalogIsOpen
} = menu.actions;

export default menu.reducer;