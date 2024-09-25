import { useCallback, useEffect, useMemo, useState } from 'react';
import { generatePagination } from '#utils/pagination';

export type Data = {
    start: number;
    end: number;
    current: number;
    hasPrev: boolean;
    hasNext: boolean;
    display: number[];
    set: (page: number) => void;
    next: () => void;
    prev: () => void;
    toStart: () => void;
    toEnd: () => void;
};

export function usePagination(
    startPage: number,
    endPage: number,
    pagesDisplay: number,
): Data {
    const [currentPage, setCurrentPage] = useState<number>(startPage);
    const [displayPages, setDisplayPages] = useState<number[]>([]);
    const memoizedDisplayPages = useMemo(() => displayPages, [displayPages]);

    const setPage = useCallback(
        (page: number) => {
            if (page >= startPage && page <= endPage) {
                setCurrentPage(page);
            }
        },
        [startPage, endPage],
    );

    const nextPage = useCallback(() => {
        setCurrentPage((prevPage) =>
            prevPage < endPage ? prevPage + 1 : prevPage,
        );
    }, [endPage]);

    const prevPage = useCallback(() => {
        setCurrentPage((prevPage) =>
            prevPage > startPage ? prevPage - 1 : prevPage,
        );
    }, [startPage]);

    const toStart = useCallback(() => {
        setCurrentPage(startPage);
    }, [startPage]);

    const toEnd = useCallback(() => {
        setCurrentPage(endPage);
    }, [endPage]);

    useEffect(() => {
        setDisplayPages(
            generatePagination(startPage, endPage, currentPage, pagesDisplay),
        );
    }, [startPage, endPage, currentPage, pagesDisplay, setDisplayPages]);

    return {
        start: startPage,
        end: endPage,
        current: currentPage,
        hasPrev: currentPage > startPage,
        hasNext: currentPage < endPage,
        display: memoizedDisplayPages,
        set: setPage,
        next: nextPage,
        prev: prevPage,
        toStart: toStart,
        toEnd: toEnd,
    };
}
