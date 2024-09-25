import { useCallback, useState } from 'react';

export function useError() {
    const [, setError] = useState();
    return useCallback(
        (e: Error) => {
            setError(() => {
                throw e;
            });
        },
        [setError],
    );
}
