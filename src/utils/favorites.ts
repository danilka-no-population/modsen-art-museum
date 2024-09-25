import { FAVORITES_PAINTINGS_STORAGE_KEY } from '#constants/storage';

const SEPARATOR = ',';

function _parseIdList(listStr: string): number[] {
    return listStr
        .split(SEPARATOR)
        .map((v) => Number.parseInt(v))
        .filter((v) => v);
}

function _formatIdList(list: number[]): string {
    return list.join(SEPARATOR);
}

function _getStorageValue(key: string): string {
    return window.sessionStorage.getItem(key) ?? '';
}

function _setStorageValue(key: string, value: string) {
    const event = new StorageEvent('storage', {
        key: key,
        oldValue: window.sessionStorage.getItem(key),
        newValue: value,
    });

    window.sessionStorage.setItem(key, value);
    window.dispatchEvent(event);
}

function _clearStorageValues(key: string) {
    const event = new StorageEvent('storage', {
        key: key,
        oldValue: window.sessionStorage.getItem(key),
        newValue: null,
    });

    window.sessionStorage.removeItem(key);
    window.dispatchEvent(event);
}

export function getFavoritePaintingsIds(): number[] {
    return _parseIdList(_getStorageValue(FAVORITES_PAINTINGS_STORAGE_KEY));
}

export function addFavoritePaintingId(paintingId: number) {
    const favoriteIds = getFavoritePaintingsIds();

    if (favoriteIds.includes(paintingId)) {
        return;
    }

    favoriteIds.push(paintingId);
    _setStorageValue(
        FAVORITES_PAINTINGS_STORAGE_KEY,
        _formatIdList(favoriteIds),
    );
}

export function removeFavoritePaintingId(paintingId: number) {
    const favoriteIds = getFavoritePaintingsIds();

    if (!favoriteIds.includes(paintingId)) {
        return;
    }

    favoriteIds.splice(favoriteIds.indexOf(paintingId), 1);
    _setStorageValue(
        FAVORITES_PAINTINGS_STORAGE_KEY,
        _formatIdList(favoriteIds),
    );
}

export function clearFavoritePaintingsIds() {
    _clearStorageValues(FAVORITES_PAINTINGS_STORAGE_KEY);
}
