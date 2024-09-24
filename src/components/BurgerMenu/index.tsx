import React from 'react';
import styles from './styles.module.scss';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    children: React.ReactNode;
}

export function BurgerMenu({ isOpen, toggleMenu, children }: BurgerMenuProps) {
    return (
        <div className={styles.burgerMenu}>
            <button className={styles.burgerButton} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </button>
            {isOpen && <div className={styles.menuContent}>{children}</div>}
        </div>
    );
}
