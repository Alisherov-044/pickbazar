import { getAbsolutePrice } from "@/utils";

let DOLLAR = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
});

export function formatCurrency(price: number, discount?: number) {
    return DOLLAR.format(getAbsolutePrice(price, discount));
}
