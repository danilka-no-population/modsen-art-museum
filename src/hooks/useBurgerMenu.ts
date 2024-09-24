import { useState } from 'react';

export function useBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return { isOpen, toggleMenu, closeMenu };
}
