import { createSlice } from "@reduxjs/toolkit";

export type NavbarState = {
    burger: {
        open: boolean;
    };
    search: {
        open: boolean;
    };
    cart: {
        open: boolean;
    };
};

const initialState: NavbarState = {
    burger: {
        open: false,
    },
    search: {
        open: false,
    },
    cart: {
        open: false,
    },
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        openBurger: (state) => {
            state.burger.open = true;
        },
        closeBurger: (state) => {
            state.burger.open = false;
        },
        toggleBurger: (state) => {
            state.burger.open = !state.burger.open;
        },
        openSearch: (state) => {
            state.search.open = true;
        },
        closeSearch: (state) => {
            state.search.open = false;
        },
        toggleSearch: (state) => {
            state.search.open = !state.search.open;
        },
        openCart: (state) => {
            state.cart.open = true;
        },
        closeCart: (state) => {
            state.cart.open = false;
        },
        toggleCart: (state) => {
            state.cart.open = !state.cart.open;
        },
    },
});

export const {
    openBurger,
    closeBurger,
    toggleBurger,
    openSearch,
    closeSearch,
    toggleSearch,
    openCart,
    closeCart,
    toggleCart,
} = navbarSlice.actions;
export default navbarSlice.reducer;
