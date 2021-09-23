import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    isAuth: null,
    authInfoLoaded: false,
    profile: null,
    counter: 0
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action){
            state.isAuth = action.payload;
        },
        setAuthInfoLoaded(state, action){
            state.authInfoLoaded = action.payload;
        },
        setProfile(state, action){
            state.profile = action.payload;
        },
        setCounter(state, action){
            state.counter++;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.auth,
            };
        },
    },
});

export const {
    setIsAuth,
    setAuthInfoLoaded,
    setProfile,
    setCounter
} = auth.actions;

export default auth.reducer;