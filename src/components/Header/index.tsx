import { useRef } from 'react';
import { UniversalWrapper } from '#components/UniversalWrapper';
import { BurgerMenu } from '#components/BurgerMenu';
import { Logotype } from '#components/Logotype';
import { Nav } from '#components/Nav';
import { useBurgerMenu } from '#/hooks/useBurgerMenu';

import styles from './styles.module.scss';

export function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const { isOpen, toggleMenu } = useBurgerMenu();

    return (
        <div ref={headerRef}>
            <UniversalWrapper className={styles.header}>
                <Logotype variant="white" />
                <div className={styles.navigation} data-opened={isOpen}>
                    <div className={styles.navBarWrapper}>
                        <Nav />
                    </div>
                </div>
                <div className={styles.menuButtonWrapper}>
                    <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu}>
                        <Nav />
                    </BurgerMenu>
                </div>
            </UniversalWrapper>
        </div>
    );
}
