import { Flex, Typography } from "antd";
import { Button } from "./styles";

export type QtyControllerProps = {
    qty: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export function QtyController({
    qty,
    onIncrement,
    onDecrement,
}: QtyControllerProps) {
    return (
        <Flex className="flex-col w-9 h-[110px] justify-between bg-gray-100 rounded-2xl">
            <Button onClick={onIncrement}>+</Button>
            <Typography className="flex-auto flex items-center justify-center">
                {qty}
            </Typography>
            <Button onClick={onDecrement}>-</Button>
        </Flex>
    );
}
