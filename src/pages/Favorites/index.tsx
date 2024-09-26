import { PageTemplate } from '#/components/PageTemplate';
import styles from './styles.module.scss';

export function Favorites() {
    return (
        <PageTemplate>
            <div className={styles.container}>
                <p>Да у вас же еще нету избранных!!!</p>
            </div>
        </PageTemplate>
    );
}
