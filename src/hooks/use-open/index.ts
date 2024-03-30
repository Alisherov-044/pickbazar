import { useState } from "react";

export function useOpen() {
    const [isOpen, setisOpen] = useState<Boolean>(false);

    const open = () => setisOpen(true);
    const close = () => setisOpen(false);
    const toggle = () => setisOpen((prev) => !prev);

    return { isOpen, open, close, toggle };
}
