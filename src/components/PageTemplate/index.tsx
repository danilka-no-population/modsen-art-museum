import { ReactNode } from 'react';
import { UniversalWrapper } from '#components/UniversalWrapper';
import { Footer } from '#components/Footer';
import { Header } from '#components/Header';

import styles from './styles.module.scss';

export type PageLayoutProps = {
    children: ReactNode;
};

export function PageTemplate({ children }: PageLayoutProps) {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.headerWrapper}>
                <Header />
            </header>
            <main className={styles.contentWrapper}>
                <UniversalWrapper className={styles.content}>
                    {children}
                </UniversalWrapper>
            </main>
            <footer className={styles.footerWraper}>
                <Footer />
            </footer>
        </div>
    );
}
