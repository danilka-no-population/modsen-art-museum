import { useCallback } from 'react';
import { Bookmark } from '#components/Bookmark';
import { Loader } from '#components/Loader';
import { useFavoriteId } from '#hooks/useFavoriteId';
import { useGetPainting } from '#hooks/useGetPainting';

import styles from './styles.module.scss';

export type PaintingInfoProps = {
    paintingId: number;
};

export function PaintingInfo({ paintingId }: PaintingInfoProps) {
    const painting = useGetPainting(paintingId);
    const favorites = useFavoriteId();

    const handleFavoriteClick = useCallback(() => {
        if (!painting) {
            return;
        }
        if (favorites.favoritesIds.includes(painting.id)) {
            favorites.remove(painting.id);
        } else {
            favorites.add(painting.id);
        }
    }, [painting, favorites]);

    if (!painting) {
        return <Loader />;
    }

    return (
        <div className={styles.infoWrapper}>
            <div className={styles.paintingWrapper}>
                <img
                    className={styles.painting}
                    src={painting.imageUrl}
                    alt={painting.title}
                />
                <div className={styles.bookmarkWrapper}>
                    <Bookmark
                        active={favorites.favoritesIds.includes(painting.id)}
                        onClick={handleFavoriteClick}
                    />
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.mainInfo}>
                    <h2 className={styles.title}>{painting.title}</h2>
                    <h3 className={styles.artist}>{painting.artist}</h3>
                    <h5 className={styles.date}>{painting.date}</h5>
                </div>
                <div className={styles.secondaryInfo}>
                    <h2 className={styles.overview}>Overview</h2>
                    <p className={styles.parameters}>
                        <span className={styles.parameterTitle}>
                            Place Of Origin:
                        </span>
                        <span className={styles.parameterValue}>
                            {painting.placeOfOrigin ?? 'Unknown'}
                        </span>
                    </p>
                    <p className={styles.parameters}>
                        <span className={styles.parameterTitle}>
                            Dimensions:
                        </span>
                        <span className={styles.parameterValue}>
                            {painting.dimensions}
                        </span>
                    </p>
                    <p className={styles.parameters}>
                        <span className={styles.parameterTitle}>
                            Creadit Line:
                        </span>
                        <span className={styles.parameterValue}>
                            {painting.creditLine}
                        </span>
                    </p>
                    <p className={styles.parameters}>
                        <span className={styles.parameterTitle}>Gallery:</span>
                        <span className={styles.parameterValue}>
                            {painting.gallery ?? 'Unknown'}
                        </span>
                    </p>
                    <p className={styles.parameters}>
                        {painting.isOnView ? 'Public' : 'Private'}
                    </p>
                </div>
            </div>
        </div>
    );
}
