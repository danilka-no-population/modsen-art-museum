import { createContext, ReactNode, useCallback, useState } from 'react';

export type MenuContextValue = {
    isOpened: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

const DEFAULT_VALUE: MenuContextValue = {
    isOpened: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
};

export const MenuContext = createContext<MenuContextValue>(DEFAULT_VALUE);

export type MenuContextProviderProps = {
    children: ReactNode;
};

export function MenuContextProvider({ children }: MenuContextProviderProps) {
    const [isOpened, setOpened] = useState(DEFAULT_VALUE.isOpened);

    const open = useCallback(() => {
        setOpened(true);
    }, []);

    const close = useCallback(() => {
        setOpened(false);
    }, []);

    const toggle = useCallback(() => {
        setOpened((prevOpened) => !prevOpened);
    }, []);

    return (
        <MenuContext.Provider value={{ isOpened, open, close, toggle }}>
            {children}
        </MenuContext.Provider>
    );
}
