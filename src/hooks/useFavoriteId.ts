import { useCallback, useEffect, useMemo, useState } from 'react';
import { FAVORITES_PAINTINGS_STORAGE_KEY } from '#constants/storage';
import {
    addFavoritePaintingId,
    clearFavoritePaintingsIds,
    getFavoritePaintingsIds,
    removeFavoritePaintingId,
} from '#utils/favorites';

export function useFavoriteId() {
    const [favoritesIds, setFavoritesIds] = useState<number[]>(
        getFavoritePaintingsIds(),
    );
    const memoizedFavoritesIds = useMemo(() => favoritesIds, [favoritesIds]);

    const handleFavoritesChange = useCallback(
        (event: StorageEvent) => {
            if (event.key !== FAVORITES_PAINTINGS_STORAGE_KEY) {
                return;
            }
            if (event.newValue === event.oldValue) {
                return;
            }
            setFavoritesIds(getFavoritePaintingsIds());
        },
        [setFavoritesIds],
    );

    useEffect(() => {
        window.addEventListener('storage', handleFavoritesChange, false);
        return () => {
            window.removeEventListener('storage', handleFavoritesChange);
        };
    }, [handleFavoritesChange]);

    return {
        favoritesIds: memoizedFavoritesIds,
        add: addFavoritePaintingId,
        remove: removeFavoritePaintingId,
        clear: clearFavoritePaintingsIds,
    };
}
