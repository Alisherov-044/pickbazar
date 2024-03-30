import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "../slices/navbarSlice";
import cartSlide from "../slices/cartSlice";

export const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        cart: cartSlide,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
