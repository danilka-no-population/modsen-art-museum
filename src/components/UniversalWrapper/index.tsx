import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type WrapperSettings = {
    className?: string;
    children: ReactNode;
};
export function UniversalWrapper({ className, children }: WrapperSettings) {
    return (
        <div className={[styles.wrapper, className].join(' ')}>{children}</div>
    );
}
