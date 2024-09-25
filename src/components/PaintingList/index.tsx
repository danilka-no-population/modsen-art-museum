import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavoriteId } from '#hooks/useFavoriteId';
import { PaintingList as PaintingListType } from '#types/paintings';
import { ROUTES } from '#/routes';
import { PaintingWrap, PaintingProps } from '#components/PaintingWrap';
import styles from './styles.module.scss';

export type PaintingListProps = Omit<
    PaintingProps,
    'painting' | 'isFavorite' | 'onClick' | 'onFavoriteAdd' | 'onFavoriteRemove'
> & {
    paintings: PaintingListType;
};

export function PaintingList({ paintings, ...props }: PaintingListProps) {
    const navigate = useNavigate();
    const favorites = useFavoriteId();

    const handleCardClick = useCallback(
        (id: number) => {
            navigate(ROUTES.info.getPath(id));
        },
        [navigate],
    );

    return (
        <div className={styles.list}>
            {paintings.map((pic) => (
                <PaintingWrap
                    key={pic.id}
                    painting={pic}
                    isFavorite={(id) => favorites.favoritesIds.includes(id)}
                    onClick={handleCardClick}
                    onFavoriteAdd={favorites.add}
                    onFavoriteRemove={favorites.remove}
                    {...props}
                />
            ))}
        </div>
    );
}
