import { Data } from '#hooks/usePagination';
import styles from './styles.module.scss';

export type PaginationProps = {
    pagination: Data;
};

export function Pagination({ pagination }: PaginationProps) {
    return (
        <div className={styles.paginationWrapper}>
            {pagination.hasPrev && (
                <div className={styles.paginationGroup}>
                    <button
                        className={styles.paginationButton}
                        onClick={() => pagination.prev()}
                    >
                        &#60;
                    </button>
                </div>
            )}
            <div className={styles.paginationGroup}>
                {pagination.display.map((p) => (
                    <button
                        key={p}
                        className={styles.paginationButton}
                        data-current={p === pagination.current}
                        onClick={() => pagination.set(p)}
                    >
                        {p}
                    </button>
                ))}
            </div>
            {pagination.hasNext && (
                <div className={styles.paginationGroup}>
                    <button
                        className={styles.paginationButton}
                        onClick={() => pagination.next()}
                    >
                        &#62;
                    </button>
                </div>
            )}
        </div>
    );
}
