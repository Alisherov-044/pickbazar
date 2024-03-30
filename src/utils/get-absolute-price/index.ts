export function getAbsolutePrice(price: number, discount?: number) {
    const result = discount ? price - (price / 100) * discount : price;

    return result;
}
