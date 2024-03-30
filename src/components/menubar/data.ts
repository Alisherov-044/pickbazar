import { Icons } from "@/components";
import type { FC } from "react";
import type { IconProps } from "@/components/icons";

export type TNavButton = {
    id: number;
    url?: string;
    onClick?: { action: "open/navbar" | "activate/search" | "open/cart" };
    Icon: FC<IconProps>;
};

export const navButtons: TNavButton[] = [
    {
        id: 1,
        onClick: {
            action: "open/navbar",
        },
        Icon: Icons.burger,
    },
    {
        id: 2,
        onClick: {
            action: "activate/search",
        },
        Icon: Icons.search,
    },
    {
        id: 3,
        url: "/",
        Icon: Icons.home,
    },
    {
        id: 4,
        onClick: {
            action: "open/cart",
        },
        Icon: Icons.cart,
    },
    {
        id: 5,
        url: "/profile",
        Icon: Icons.user,
    },
];
