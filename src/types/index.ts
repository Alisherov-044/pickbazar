export type TProduct = {
    id: number;
    name: string;
    price: number;
    discount?: number;
    description: string;
    categories: number[];
    sellers: number[];
    relatedProducts: number[];
    weight: string;
    rating: number;
    images: string[];
};
