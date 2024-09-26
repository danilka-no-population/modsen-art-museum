import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type SubtitleProps = {
    firstPhrase: ReactNode;
    secondPhrase: ReactNode;
};

export function Subtitle({ firstPhrase, secondPhrase }: SubtitleProps) {
    return (
        <div className={styles.subtitleWrapper}>
            <h4 className={styles.firstPhrase}>{firstPhrase}</h4>
            <h2 className={styles.secondPhrase}>{secondPhrase}</h2>
        </div>
    );
}
