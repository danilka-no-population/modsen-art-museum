import { Subtitle } from '#components/Subtitle';
import { PaintingList } from '#components/PaintingList';
import { useFavoriteList } from '#hooks/useFavoriteList';
import styles from './styles.module.scss';

export function FavoriteList() {
    const favoriteList = useFavoriteList();
    return (
        <>
            <div className={styles.subtitleWrapper}>
                <Subtitle
                    firstPhrase="Saved by you"
                    secondPhrase="Your favorites list"
                />
            </div>
            {favoriteList.favorites?.length ? (
                <PaintingList
                    variant="default"
                    paintings={favoriteList.favorites}
                />
            ) : (
                <h4 className={styles.noFavs}>Your favorites list is empty</h4>
            )}
        </>
    );
}
