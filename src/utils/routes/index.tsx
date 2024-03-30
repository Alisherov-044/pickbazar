import { HomePage } from "@/pages";
import type { ReactNode } from "react";

export type TRoute = {
    id: number;
    path: string;
    element: ReactNode;
};

export const routes: TRoute[] = [
    {
        id: 1,
        path: "/",
        element: <HomePage />,
    },
];
