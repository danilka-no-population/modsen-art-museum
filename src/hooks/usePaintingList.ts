import { useEffect, useState } from 'react';
import { useError } from '#hooks/useError';
import { PaintingList } from '#types/paintings';
import { getPaintingList } from '#utils/api';

export function usePaintingList(paintingIds: number[]): PaintingList | null {
    const throwError = useError();
    const [paintings, setPaintings] = useState<PaintingList | null>(null);

    useEffect(() => {
        (() => {
            getPaintingList(paintingIds)
                .then((paintings) => setPaintings(paintings))
                .catch((error) => throwError(error));
        })();
    }, [paintingIds, throwError]);

    return paintings;
}
