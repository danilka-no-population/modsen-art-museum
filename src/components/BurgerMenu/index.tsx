import React from 'react';
import styles from './styles.module.scss';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    children: React.ReactNode;
}

export function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    return (
        <button
            className={styles.button}
            data-active={isOpen}
            onClick={toggleMenu}
        >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    );
}
