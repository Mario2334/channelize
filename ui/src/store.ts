import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {authSlice} from "channelize/slices/auth";
import {networkSlice} from "channelize/slices/network";
import {isLoadingSlice} from "channelize/slices/loader";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [networkSlice.name]: networkSlice.reducer,
            [isLoadingSlice.name]: isLoadingSlice.reducer
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
