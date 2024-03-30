import { Drawer, Icons, Logo } from "@/components";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { navLinks } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { navbar } from "@/redux";
import type { RootState } from "@/redux";

export function SideMenu() {
    const { burger } = useSelector((state: RootState) => state.navbar);
    const dispatch = useDispatch();

    return (
        <Drawer
            title={<Logo className="block w-[120px]" />}
            closable={false}
            placement="left"
            open={burger.open}
            onClose={() => dispatch(navbar.closeBurger())}
            extra={
                <Button
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:!bg-green-cart text-gray-500 hover:!text-white border-none"
                    onClick={() => dispatch(navbar.closeBurger())}
                >
                    <Icons.close className="w-3.5 h-3.5 flex-shrink-0" />
                </Button>
            }
        >
            <Flex className="flex-col">
                {navLinks.map(({ id, title, url }) => (
                    <Link
                        key={id}
                        to={url}
                        className="capitalize font-bold px-5 py-3.5 hover:text-green-600"
                    >
                        {title}
                    </Link>
                ))}
            </Flex>
        </Drawer>
    );
}
