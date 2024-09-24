import { ROUTES } from '#/routes';
import { NavLink } from '#components/NavLink';
import { BurgerMenu } from '#components/BurgerMenu';
import { useBurgerMenu } from '#hooks/useBurgerMenu';
import styles from './styles.module.scss';

export function NavBar() {
    const { isOpen, toggleMenu, closeMenu } = useBurgerMenu();

    const navLinks = Object.values(ROUTES).filter((obj) => obj.link !== null);

    return (
        <nav className={styles.navbar}>
            <div className={styles.burgerMenuWrapper}>
                <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu}>
                    {navLinks.map((obj) => (
                        <NavLink
                            key={obj.basePath}
                            to={obj.getPath()}
                            text={obj.link.text}
                            icon={obj.link.icon}
                            onClick={closeMenu}
                        />
                    ))}
                </BurgerMenu>
            </div>
            <div className={styles.navLinks}>
                {navLinks.map((obj) => (
                    <NavLink
                        key={obj.basePath}
                        to={obj.getPath()}
                        text={obj.link.text}
                        icon={obj.link.icon}
                    />
                ))}
            </div>
        </nav>
    );
}
