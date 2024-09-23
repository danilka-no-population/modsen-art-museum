import { Link } from 'react-router-dom';
import logoDark from '#/assets/logotypes/main-logo-dark.svg';
import logoWhite from '#/assets/logotypes/main-logo-white.svg';
import museumLogo from '#/assets/logotypes/museum-logo.svg';
import { ROUTES } from '#/routes';
import styles from './styles.module.scss';

export type LogotypeProps = {
    variant?: 'museum' | 'white' | 'dark';
};

export function MuseumLogo({ variant = 'museum' }: LogotypeProps) {
    const logoSrc = {
        'museum': museumLogo,
        'white': logoWhite,
        'dark': logoDark,
    }[variant];

    return (
        <Link className={styles.logo} to={ROUTES.home.getPath()}>
            <img
                className={styles.image}
                src={logoSrc}
                alt="Project logotype"
            />
        </Link>
    );
}
