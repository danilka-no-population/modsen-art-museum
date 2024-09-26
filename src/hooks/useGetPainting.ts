import { useEffect, useState } from 'react';
import { useError } from '#hooks/useError';
import { Painting } from '#types/paintings';
import { getPainting } from '#utils/api';

export function useGetPainting(paintingId: number): Painting | null {
    const err = useError();
    const [painting, setPainting] = useState<Painting | null>(null);

    useEffect(() => {
        (() => {
            getPainting(paintingId)
                .then((painting) => setPainting(painting))
                .catch((error) => err(error));
        })();
    }, [paintingId, err]);

    return painting;
}
