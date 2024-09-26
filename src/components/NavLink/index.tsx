import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export type LinkProps = {
    to: string;
    text: string;
    icon: string;
    onClick?: () => void;
};

export function NavLink({ to, text, icon, onClick }: LinkProps) {
    return (
        <Link className={styles.link} to={to} onClick={onClick}>
            <img className={styles.icon} src={icon} alt="nav element" />
            <span className={styles.text}>{text}</span>
        </Link>
    );
}
