import { Icons } from "@/components/icons";
import type { FC } from "react";
import type { IconProps } from "@/components/icons";

export type TNavLink = {
    id: number;
    title: string;
    url?: string;
    children?: TNavLink[];
};

export type TPageLink = {
    id: number;
    title: string;
    url: string;
    Icon: FC<IconProps>;
};

export const navLinks: TNavLink[] = [
    {
        id: 1,
        title: "Shops",
        url: "#",
    },
    {
        id: 2,
        title: "Offers",
        url: "#",
    },
    {
        id: 3,
        title: "Contact",
        url: "#",
    },
    {
        id: 4,
        title: "Pages",
        children: [
            {
                id: 1,
                title: "Flash Sale",
                url: "#",
            },
            {
                id: 2,
                title: "Manufacturers/Publishers",
                url: "#",
            },
            {
                id: 3,
                title: "Authors",
                url: "#",
            },
            {
                id: 4,
                title: "FAQ",
                url: "#",
            },
            {
                id: 5,
                title: "Terms & Conditions",
                url: "#",
            },

            {
                id: 6,
                title: "Customer Refund Policy",
                url: "#",
            },
            {
                id: 7,
                title: "Vendor Refund Policy",
                url: "#",
            },
        ],
    },
];

export const pageLinks: TPageLink[] = [
    {
        id: 1,
        title: "Grocery",
        url: "/grocery",
        Icon: Icons.pages.grocery,
    },
    {
        id: 2,
        title: "Bakery",
        url: "/bakery",
        Icon: Icons.pages.bakery,
    },
    {
        id: 3,
        title: "Makeup",
        url: "/makeup",
        Icon: Icons.pages.makeup,
    },
    {
        id: 4,
        title: "Bags",
        url: "/bags",
        Icon: Icons.pages.bags,
    },
    {
        id: 5,
        title: "Clothing",
        url: "/clothing",
        Icon: Icons.pages.clothing,
    },
    {
        id: 6,
        title: "Furniture",
        url: "/furniture",
        Icon: Icons.pages.furniture,
    },
    {
        id: 7,
        title: "Daily Needs",
        url: "/daily-needs",
        Icon: Icons.pages.dailyNeeds,
    },
    {
        id: 8,
        title: "Books",
        url: "/books",
        Icon: Icons.pages.books,
    },
    {
        id: 9,
        title: "Gadget",
        url: "/gadget",
        Icon: Icons.pages.gadget,
    },
    {
        id: 10,
        title: "Medicine",
        url: "/medicine",
        Icon: Icons.pages.medicine,
    },
];
