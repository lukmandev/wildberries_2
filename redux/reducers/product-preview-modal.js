import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    isActive: false,
    data: null,
}

const productPreviewModal = createSlice({
    name: 'productPreview',
    initialState,
    reducers: {
        setActive(state, action){
            state.isActive = action.payload;
        },
        setData(state, action){
            state.data = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.productPreviewModal,
            };
        },
    },
});

export const {
    setActive,
    setData
} = productPreviewModal.actions;

export default productPreviewModal.reducer;