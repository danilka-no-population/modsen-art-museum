import { useState } from 'react';

export function useBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Toggle menu clicked'); // Проверка вызова
        setIsOpen((prev) => !prev);
    };
    const closeMenu = () => {
        console.log('Close menu clicked'); // Проверка вызова
        setIsOpen(false);
    };

    return { isOpen, toggleMenu, closeMenu };
}
