import { useEffect, useState } from 'react';
import { Pagination } from '#components/Pagination';
import { Subtitle } from '#components/Subtitle';
import { PaintingList } from '#components/PaintingList';
import { usePaintingsSearch } from '#hooks/usePaintingsSearch';
import { useDebounce } from '#hooks/useDebounce';
import { usePagination } from '#hooks/usePagination';

import styles from './styles.module.scss';

export function Gallery() {
    const [page, setPage] = useState<number>(1);
    const debouncePage = useDebounce(page, 500);
    const [paintings, paginationInfo] = usePaintingsSearch('', 3, debouncePage);
    const pagination = usePagination(1, paginationInfo?.totalPages || 1, 5);

    useEffect(() => {
        setPage(pagination.current);
    }, [pagination]);

    return (
        <section className={styles.gallery}>
            <div className={styles.titleWrapper}>
                <Subtitle
                    firstPhrase="Topics for you"
                    secondPhrase="Our special gallery"
                />
            </div>
            <div className={styles.list}>
                <PaintingList variant="big" paintings={paintings} />
            </div>
            <div className={styles.paginationWrapper}>
                <Pagination pagination={pagination} />
            </div>
        </section>
    );
}
