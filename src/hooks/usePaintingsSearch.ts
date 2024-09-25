import { useEffect, useState } from 'react';
import { useError } from '#hooks/useError';
import { Pagination, Painting, PaintingListResult } from '#types/paintings';
import { searchPaintings } from '#utils/api';

export function usePaintingsSearch(
    searchQuery?: string,
    limit?: number,
    page?: number,
): [Painting[], Pagination | null] {
    const err = useError();
    const [result, setResult] = useState<PaintingListResult | null>(null);

    useEffect(() => {
        (() => {
            searchPaintings(searchQuery, limit, page)
                .then((result) => setResult(result))
                .catch((error) => err(error));
        })();
    }, [searchQuery, limit, page, err]);

    return [result?.paintingList ?? [], result?.pagination ?? null];
}
