import { Header } from '#/components/Header';
import styles from './styles.module.scss';

export function Home() {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.headerWrapper}>
                <Header />
            </header>
        </div>
    );
}
