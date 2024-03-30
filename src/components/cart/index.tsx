import { Button, Flex, Typography } from "antd";
import { MiniCard, Icons, Drawer } from "@/components";
import { calculateTotalPrice, formatCurrency } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { navbar } from "@/redux";
import type { RootState } from "@/redux";

export function Cart() {
    const { cart } = useSelector((state: RootState) => state.navbar);
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <Drawer
            title={
                <Flex className="items-center gap-x-2 text-green-cart">
                    <Icons.basket className="w-6 h-6" />
                    <Typography className="text-lg text-green-cart">
                        {items.length} item{items.length > 1 && "s"}
                    </Typography>
                </Flex>
            }
            closable={false}
            placement="right"
            open={cart.open}
            onClose={() => dispatch(navbar.closeCart())}
            extra={
                <Button
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:!bg-green-cart text-gray-500 hover:!text-white border-none"
                    onClick={() => dispatch(navbar.closeCart())}
                >
                    <Icons.close className="w-3.5 h-3.5 flex-shrink-0" />
                </Button>
            }
        >
            <Flex className="flex-col h-full">
                {items.length <= 0 ? (
                    <Flex className="flex-auto flex-col items-center justify-center gap-y-3">
                        <Icons.cartEmpty />
                        <Typography className="text-[18px] font-bold">
                            No products found
                        </Typography>
                    </Flex>
                ) : (
                    <Flex className="flex-auto flex-col">
                        {items.map((product) => (
                            <MiniCard key={product.id} product={product} />
                        ))}
                    </Flex>
                )}
                <Flex className="w-full px-4 py-6">
                    <Button className="flex items-center p-1 pl-5 justify-between w-full h-12 font-bold text-[17px] bg-green-cart/80 hover:!bg-green-cart !text-white rounded-3xl border-none text-start">
                        Checkout
                        <Flex className="flex items-center justify-center h-full bg-white text-green-cart rounded-3xl px-4">
                            {formatCurrency(calculateTotalPrice(items))}
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Drawer>
    );
}
