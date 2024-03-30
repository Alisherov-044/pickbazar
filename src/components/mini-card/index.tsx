import { Button, Flex, Image, Typography } from "antd";
import { Icons, QtyController } from "@/components";
import { useDispatch } from "react-redux";
import { cart } from "@/redux";
import { formatCurrency, getDefaultImg } from "@/utils";
import type { TCartProduct } from "@/redux/slices/cartSlice";

export type MiniCardProps = {
    product: TCartProduct;
};

export function MiniCard({ product }: MiniCardProps) {
    const { name, price, discount, images, qty, weight } = product;
    const dispatch = useDispatch();

    return (
        <Flex className="items-center justify-between p-4 border-b">
            <Flex className="h-full items-center gap-x-4">
                <QtyController
                    qty={qty}
                    onIncrement={() => dispatch(cart.increaseQty(product))}
                    onDecrement={() => dispatch(cart.decreaseQty(product))}
                />
                <Image
                    src={getDefaultImg(images)}
                    width={45}
                    height={45}
                    alt={name}
                />
                <Flex className="h-full py-2.5 flex-col justify-between">
                    <Typography className="font-bold text-[17px]">
                        {name}
                    </Typography>
                    <Typography className="text-[16px] text-green-600">
                        {formatCurrency(price, discount)}
                    </Typography>
                    <Typography className="text-xs text-gray-500">
                        {qty} X {weight}
                    </Typography>
                </Flex>
            </Flex>
            <Flex className="items-center gap-x-3">
                <Typography className="text-[17px] font-semibold">
                    {formatCurrency(price * qty, discount)}
                </Typography>
                <Button
                    onClick={() => dispatch(cart.removeFromCart(product))}
                    className="flex items-center justify-center w-7 h-7 rounded-full border-none bg-transparent text-gray-500 hover:!bg-gray-100 hover:!text-red-500"
                >
                    <Icons.close className="w-3 h-3 flex-shrink-0" />
                </Button>
            </Flex>
        </Flex>
    );
}
