import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import auth from './reducers/auth';
import main from './reducers/main';
import admin from './reducers/admin';
import menu from './reducers/menu';
import productPreviewModal from './reducers/product-preview-modal';


const makeStore = () => configureStore({
    reducer: {
        auth,
        main,
        admin,
        menu,
        productPreviewModal
    },
});

export const wrapper = createWrapper(makeStore);