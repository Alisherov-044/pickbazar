import { clsx } from "clsx";
import { Button, Dropdown, Flex, Input, Layout, Typography } from "antd";
import { Cart, Icons, Logo, SideMenu } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { BurgerLine, LinkButton } from "./styles";
import { navbar } from "@/redux";
import { Link, useLocation } from "react-router-dom";
import { navLinks, pageLinks } from "./data";
import { Fragment } from "react/jsx-runtime";
import { useOpen } from "@/hooks";
import type { RootState } from "@/redux";
import type { TNavLink, TPageLink } from "./data";

export function Header() {
    const { search } = useSelector((state: RootState) => state.navbar);
    const { isOpen: isPageOpen, toggle: togglePageOpen } = useOpen();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const currentPage =
        pageLinks.find((page) => page.url === pathname) ?? pageLinks[0];

    function getDropdownLinks(links: TNavLink[]) {
        return links.map(({ id, url, title }) => ({
            key: id,
            label: (
                <Link to={url!} className="dropdown-link">
                    {title}
                </Link>
            ),
        }));
    }

    function getPageLinks(links: TPageLink[]) {
        return links.map(({ id, url, title, Icon }) => ({
            key: id,
            label: (
                <Link
                    to={url}
                    className="w-[200px] flex items-center gap-x-2 px-3 py-1 text-black hover:!text-green-600"
                >
                    <Icon className="w-5 h-5" /> {title}
                </Link>
            ),
        }));
    }

    return (
        <Layout.Header className="sticky top-0 flex items-center justify-between w-full px-5 py-4 lg:px-7 md:h-24 bg-white border-b md:border-none">
            <Flex className="items-center gap-x-6">
                <Flex
                    onClick={() => dispatch(navbar.openBurger())}
                    className="group relative w-6 hidden md:flex xl:hidden flex-col gap-y-1.5 border-none bg-transparent text-black cursor-pointer"
                >
                    <BurgerLine className="w-1/2 group-hover:w-full group-active:w-1/2" />
                    <BurgerLine className="w-full group-hover:w-2/3 group-active:w-full" />
                    <BurgerLine className="w-2/3 group-hover:w-full group-active:w-2/3" />
                </Flex>
                <Logo className="w-[130px] md:w-auto mr-5" />
                <Dropdown
                    trigger={["click"]}
                    onOpenChange={togglePageOpen}
                    overlayClassName="page-links-dropdown"
                    menu={{ items: getPageLinks(pageLinks) }}
                >
                    <Button className="hidden xl:flex items-center justify-between gap-x-2 h-11 px-4 !border-gray-200 !text-green-700">
                        <currentPage.Icon className="w-5 h-5" />
                        <Typography className="text-current">
                            {currentPage.title}
                        </Typography>
                        <Icons.arrow.select
                            className={clsx(
                                "translate-y-0.5 ml-2",
                                isPageOpen
                                    ? "rotate-180 -translate-y-0.5"
                                    : "rotate-0"
                            )}
                        />
                    </Button>
                </Dropdown>
            </Flex>
            <Flex className="items-center gap-x-3">
                <Flex className="hidden xl:flex items-center gap-x-8 mr-7">
                    {navLinks.map(({ id, title, url, children }) => (
                        <Fragment key={id}>
                            {url && (
                                <Link
                                    to={url}
                                    className="text-black hover:text-green-600"
                                >
                                    {title}
                                </Link>
                            )}
                            {children && (
                                <Dropdown
                                    overlayClassName="nav-links-dropdown"
                                    className="!scale-100"
                                    menu={{ items: getDropdownLinks(children) }}
                                >
                                    <Button
                                        type="link"
                                        className="flex items-center gap-x-1.5 border-none bg-transparent text-[17px] p-0 text-black hover:!text-green-600"
                                    >
                                        {title}
                                        <Icons.arrow.down />
                                    </Button>
                                </Dropdown>
                            )}
                        </Fragment>
                    ))}
                </Flex>
                <Button
                    onClick={() => dispatch(navbar.openSearch())}
                    className="hidden md:flex items-center justify-center w-9 h-9 rounded-full !border-gray-200 !text-black"
                >
                    <Icons.search className="w-4 h-4 flex-shrink-0" />
                </Button>
                <Link to="#">
                    <LinkButton className="hidden md:flex">Join</LinkButton>
                </Link>
                <Link to="#">
                    <LinkButton className="hidden sm:flex">
                        Become a Seller
                    </LinkButton>
                </Link>
            </Flex>

            <Flex
                className={clsx(
                    "absolute z-20 top-0 left-0 w-full h-full items-center justify-center md:gap-x-6 md:border-b md:border-green-600 px-4 py-3 md:px-12 md:py-6 bg-white md:bg-white/70 md:backdrop-blur-[8px]",
                    search.open ? "flex" : "hidden"
                )}
            >
                <Input
                    size="large"
                    prefix={<Icons.search className="md:mr-3" />}
                    placeholder="Search your products from here"
                    className="border-transparent w-full max-w-[860px] !h-full md:px-4 bg-gray-100 md:bg-white md:!border-green-600 text-gray-700 hover:!border-green-500"
                />
                <Button
                    onClick={() => dispatch(navbar.closeSearch())}
                    className="hidden md:flex items-center justify-center h-full !text-green-600 !border-green-600"
                >
                    <Icons.close className="w-6 h-6" />
                </Button>
            </Flex>

            <SideMenu />
            <Cart />
        </Layout.Header>
    );
}
