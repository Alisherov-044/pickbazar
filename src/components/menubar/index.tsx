import { Button } from "antd";
import { navButtons } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { RootState, navbar } from "@/redux";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Badge } from "@/components";

export function MenuBar() {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const navbarActions: Record<
        "open/navbar" | "activate/search" | "open/cart",
        () => void
    > = {
        "open/navbar": () => dispatch(navbar.openBurger()),
        "activate/search": () => dispatch(navbar.toggleSearch()),
        "open/cart": () => dispatch(navbar.openCart()),
    };

    return (
        <nav className="w-full fixed md:hidden left-0 bottom-0 flex items-end justify-between px-2 py-3 bg-white shadow-nav">
            {navButtons.map(({ id, url, onClick, Icon }) => (
                <Fragment key={id}>
                    {url && (
                        <Link
                            to={url}
                            className="p-2 border-none hover:!text-black"
                        >
                            <Icon />
                        </Link>
                    )}
                    {onClick && (
                        <Button
                            onClick={navbarActions[onClick.action]}
                            className="p-2 border-none hover:!text-black"
                        >
                            {onClick.action === "open/cart" ? (
                                <Badge count={items.length}>
                                    <Icon />
                                </Badge>
                            ) : (
                                <Icon />
                            )}
                        </Button>
                    )}
                </Fragment>
            ))}
        </nav>
    );
}
