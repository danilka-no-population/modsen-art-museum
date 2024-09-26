import { useCallback } from 'react';
import { Bookmark } from '#components/Bookmark';
import { Painting } from '#types/paintings';
import styles from './styles.module.scss';

export type BigPaintingProps = {
    painting: Painting;
    isFavorite: (paintingId: number) => boolean;
    onClick: (paintingId: number) => void;
    onFavoriteAdd: (paintingId: number) => void;
    onFavoriteRemove: (paintingId: number) => void;
};

export function PaintingBig({
    painting,
    isFavorite,
    onClick,
    onFavoriteAdd,
    onFavoriteRemove,
}: BigPaintingProps) {
    const handleCardClick = useCallback(() => {
        onClick(painting.id);
    }, [painting, onClick]);
    const handleFavoriteClick = useCallback(() => {
        const action = isFavorite(painting.id)
            ? onFavoriteRemove
            : onFavoriteAdd;
        action(painting.id);
    }, [painting, isFavorite, onFavoriteAdd, onFavoriteRemove]);

    return (
        <div className={styles.paintingWrapper} onClick={handleCardClick}>
            <div className={styles.imageWrapper}>
                <img
                    className={styles.image}
                    src={painting.imageUrl}
                    alt={painting.title}
                />
            </div>
            <div className={styles.card}>
                <div className={styles.info}>
                    <h3 className={styles.title}>{painting.title}</h3>
                    <div className={styles.space} />
                    <p className={styles.author}>{painting.artist}</p>
                    <div className={styles.space} />
                    <p className={styles.viewOption}>
                        {painting.isOnView ? 'Public' : 'Private'}
                    </p>
                </div>
                <div
                    className={styles.control}
                    onClick={(event) => event.stopPropagation()}
                >
                    <Bookmark
                        active={isFavorite(painting.id)}
                        onClick={handleFavoriteClick}
                    />
                </div>
            </div>
        </div>
    );
}
