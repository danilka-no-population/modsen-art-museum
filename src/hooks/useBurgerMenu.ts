import { useState } from 'react';

export function useBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Toggle menu clicked');
        setIsOpen((prev) => !prev);
    };
    const closeMenu = () => {
        console.log('Close menu clicked');
        setIsOpen(false);
    };

    return { isOpen, toggleMenu, closeMenu };
}
