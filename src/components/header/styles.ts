import * as antd from "antd";
import tw from "tailwind-styled-components";

export const LinkButton = tw(antd.Button)`
    flex items-center justify-center text-center h-9 bg-green-cart-light hover:!bg-green-cart font-semibold !text-white border-none rounded
`;

export const BurgerLine = tw.span`
    !block bg-gray-500 h-[2px] rounded-sm border-none flex-shrink-0 transition-all
`;
