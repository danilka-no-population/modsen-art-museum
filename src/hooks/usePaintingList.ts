import { useEffect, useState } from 'react';
import { useError } from '#hooks/useError';
import { PaintingList } from '#types/paintings';
import { getPaintingList } from '#utils/api';

export function usePaintingList(paintingIds: number[]): PaintingList | null {
    const err = useError();
    const [paintings, setPaintings] = useState<PaintingList | null>(null);

    useEffect(() => {
        (() => {
            getPaintingList(paintingIds)
                .then((paintings) => setPaintings(paintings))
                .catch((error) => err(error));
        })();
    }, [paintingIds, err]);

    return paintings;
}
