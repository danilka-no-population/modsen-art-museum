import { ROUTES } from '#/routes';
import { NavLink } from '#components/NavLink';

import styles from './styles.module.scss';

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            {Object.values(ROUTES)
                .filter((obj) => obj.link !== null)
                .map((obj) => (
                    <NavLink
                        key={obj.basePath}
                        to={obj.getPath()}
                        text={obj.link.text}
                        icon={obj.link.icon}
                    />
                ))}
        </nav>
    );
}
