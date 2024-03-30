import { Flex } from "antd";
import { routes } from "@/utils";
import { Header, MenuBar } from "@/components";
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <Flex className="flex-col h-full">
            <Header />
            <MenuBar />
            <Routes>
                {routes.map(({ id, path, element }) => (
                    <Route key={id} path={path} element={element} />
                ))}
            </Routes>
        </Flex>
    );
}
