import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { TProduct } from "@/types";

export type TCartProduct = TProduct & {
    qty: number;
};

export type CartState = {
    items: TCartProduct[];
};

const initialState: CartState = {
    items: [
        {
            id: 1,
            name: "Apples",
            price: 2,
            discount: 20,
            description:
                "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
            categories: [1],
            sellers: [1],
            relatedProducts: [1],
            weight: "1lb",
            rating: 4.78,
            qty: 2,
            images: [
                "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=3840&q=75",
                "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=3840&q=75",
                "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=3840&q=75",
            ],
        },
    ],
};

const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }: PayloadAction<TProduct>) => {
            let currentItems = state.items;

            if (currentItems.some((item) => item.id === payload.id)) {
                currentItems = currentItems.map((item) =>
                    item.id === payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                currentItems = [...currentItems, { ...payload, qty: 1 }];
            }

            state.items = currentItems;
        },
        increaseQty: (state, { payload }: PayloadAction<TCartProduct>) => {
            let currentItems = state.items;

            if (currentItems.some((item) => item.id === payload.id)) {
                currentItems = currentItems.map((item) =>
                    item.id === payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            state.items = currentItems;
        },
        decreaseQty: (state, { payload }: PayloadAction<TCartProduct>) => {
            let currentItems = state.items;

            if (currentItems.some((item) => item.id === payload.id)) {
                if (payload.qty === 1) {
                    currentItems = currentItems.filter(
                        (item) => item.id !== payload.id
                    );
                } else {
                    currentItems = currentItems.map((item) =>
                        item.id === payload.id
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    );
                }
            }

            state.items = currentItems;
        },
        removeFromCart: (state, { payload }: PayloadAction<TCartProduct>) => {
            let currentItems = state.items;

            if (currentItems.some((item) => item.id === payload.id)) {
                currentItems = currentItems.filter(
                    (item) => item.id !== payload.id
                );
            }

            state.items = currentItems;
        },
    },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
    cartSlide.actions;
export default cartSlide.reducer;
