import { useFavoriteId } from '#hooks/useFavoriteId';
import { usePaintingList } from '#hooks/usePaintingList';

export function useFavoriteList() {
    const { favoritesIds, add, remove, clear } = useFavoriteId();
    const favorites = usePaintingList(favoritesIds);
    return { favorites, add, remove, clear };
}
