import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";

const reducer = {
    authSlice,
    productSlice
}

export const store = configureStore({
    reducer,
    // devTools: process.env.NODE_ENV == "dev"
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();