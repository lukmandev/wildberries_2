import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import auth from './reducers/auth';
import main from './reducers/main';
import admin from './reducers/admin';
import menu from './reducers/menu';



const makeStore = () => configureStore({
    reducer: {
        auth,
        main,
        admin,
        menu
    },
});

export const wrapper = createWrapper(makeStore);