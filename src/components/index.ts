export { Header } from "./header";
export { Logo } from "./logo";
export { Icons } from "./icons";
export { MenuBar } from "./menubar";
export { QtyController } from "./qty-controller";
export { MiniCard } from "./mini-card";
export { Cart } from "./cart";
export { SideMenu } from "./side-menu";

import * as antd from "antd";
import { twi } from "tw-to-css";
import styled from "styled-components";

export const Badge = styled(antd.Badge)`
    .ant-badge-count {
        ${twi`
            bg-green-700
        `}
    }
`;

export const Drawer = styled(antd.Drawer)`
    .ant-drawer-body {
        ${twi`
            p-0
        `}
    }
`;
