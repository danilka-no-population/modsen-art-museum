import { UniversalWrapper } from '#components/UniversalWrapper';
import { Logotype } from '#components/Logotype';
import { Link } from 'react-router-dom';
// import { ROUTES } from '#/routes';
import modsenLogo from '#/assets/logotypes/modsen-logo.svg';
import styles from './styles.module.scss';

export function Footer() {
    return (
        <UniversalWrapper className={styles.footer}>
            <Logotype variant="dark" />
            <Link
                className={styles.logo}
                to={'https://www.modsen-software.com/'}
                target="_blank"
            >
                <img className={styles.image} src={modsenLogo} alt="Modsen" />
            </Link>
        </UniversalWrapper>
    );
}
