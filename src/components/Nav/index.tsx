import { ROUTES } from '#/routes';
import { NavLink } from '#components/NavLink';
import styles from './styles.module.scss';

export function Nav() {
    return (
        <nav className={styles.navbar}>
            {Object.values(ROUTES)
                .filter((r) => r.link !== null)
                .map((r) => (
                    <NavLink
                        key={r.basePath}
                        to={r.getPath()}
                        text={r.link.text}
                        icon={r.link.icon}
                    />
                ))}
        </nav>
    );
}
