import { PageTemplate } from '#/components/PageTemplate';
import { Title } from '#/components/Title';
import { FavoriteList } from '#/components/FavoriteList';
import bookmarkBright from '#/assets/icons/bookmark-bright.svg';
import styles from './styles.module.scss';

export function Favorites() {
    return (
        <PageTemplate>
            <div className={styles.titleWrapper}>
                <Title>Here are your</Title>
                <Title>
                    <span className={styles.brightTitle}>
                        <img
                            className={styles.bookmark}
                            src={bookmarkBright}
                            alt="Bookmark icon of title 'Favorites'"
                        />
                        <mark>Favorites</mark>
                    </span>
                </Title>
            </div>
            <FavoriteList />
        </PageTemplate>
    );
}
