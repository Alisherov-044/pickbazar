import { getAbsolutePrice } from "@/utils";
import type { TCartProduct } from "@/redux/slices/cartSlice";

export function calculateTotalPrice(items: TCartProduct[]) {
    const totalPirce = items.reduce(
        (acc, cur) => acc + getAbsolutePrice(cur.price, cur.discount) * cur.qty,
        0
    );

    return totalPirce;
}
