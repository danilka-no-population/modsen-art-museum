import { MouseEventHandler } from 'react';
import styles from './styles.module.scss';

export type IconProps = {
    icon: string;
    alt?: string;
    active?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export function Icon({ icon, alt, active = false, onClick }: IconProps) {
    return (
        <button
            className={styles.buttonIcon}
            data-active={active}
            onClick={onClick}
        >
            <img className={styles.icon} src={icon} alt={alt ?? ''} />
        </button>
    );
}
