import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Painting } from '#types/paintings';
import { Title } from '#components/Title';
import { PaintingList } from '#components/PaintingList';
import { SearchInput } from '#components/SearchInput';
import { useDebounce } from '#hooks/useDebounce';
import { usePaintingsSearch } from '#hooks/usePaintingsSearch';

import styles from './styles.module.scss';

const SORTING_FIELDS: (keyof Painting)[] = ['title', 'artist', 'isOnView'];
const SORTING_OPTIONS = {
    NONE: 0,
    ASCENDING: 1,
    DESCENDING: 2,
};

const SORTING_FIELDS_DISPLAY = ['Title', 'Artist', 'Is on view'];
const SORTING_OPTIONS_DISPLAY = ['', '↑', '↓'];

function getNextSortingOption(currentOption: number): number {
    switch (currentOption) {
        case SORTING_OPTIONS.ASCENDING:
            return SORTING_OPTIONS.DESCENDING;
        case SORTING_OPTIONS.DESCENDING:
            return SORTING_OPTIONS.ASCENDING;
        default:
            return SORTING_OPTIONS.ASCENDING;
    }
}

export function SearchForm() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debauncedSearchQuery = useDebounce(searchQuery, 500);
    const [paintings] = usePaintingsSearch(debauncedSearchQuery);

    const [sortingField, setSortingField] = useState<keyof Painting | null>(
        null,
    );
    const [sortingOption, setSortingOption] = useState<number>(
        SORTING_OPTIONS.NONE,
    );

    const [sortedPaintings, setSortedPaintings] = useState(paintings);

    const handleSearchInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
        },
        [],
    );

    const handleSortOptionChange = useCallback(
        (field: keyof Painting) => {
            if (sortingField === field) {
                setSortingOption(getNextSortingOption(sortingOption));
            } else {
                setSortingField(field);
                setSortingOption(SORTING_OPTIONS.ASCENDING);
            }
        },
        [sortingField, sortingOption],
    );

    useEffect(() => {
        if (!sortingField) {
            setSortedPaintings(paintings);
            return;
        }

        const sortedArray = [...paintings].sort((a, b) => {
            const fieldA = a[sortingField];
            const fieldB = b[sortingField];

            if (fieldA === null || fieldB === null) {
                return 0;
            }

            const valueA = String(fieldA).toLowerCase();
            const valueB = String(fieldB).toLowerCase();

            if (sortingOption === SORTING_OPTIONS.ASCENDING) {
                return valueA.localeCompare(valueB);
            } else if (sortingOption === SORTING_OPTIONS.DESCENDING) {
                return valueB.localeCompare(valueA);
            }

            return 0;
        });

        setSortedPaintings(sortedArray);
    }, [paintings, sortingField, sortingOption]);

    return (
        <section className={styles.searchForm}>
            <div className={styles.titleWrapper}>
                <Title>
                    Let's Find Some <mark>Art</mark> Here!
                </Title>
            </div>
            <div className={styles.inputWrapper}>
                <SearchInput
                    placeholder="Search art, artist, work..."
                    value={searchQuery}
                    onChange={handleSearchInput}
                />
            </div>
            <div className={styles.sortFieldWrapper}>
                <span className={styles.sortHeader}>Sort by:</span>
                {SORTING_FIELDS.map((field) => (
                    <button
                        key={field}
                        className={styles.sortButton}
                        onClick={() => handleSortOptionChange(field)}
                        data-active={sortingField === field}
                    >
                        {sortingField === field &&
                            SORTING_OPTIONS_DISPLAY[sortingOption]}
                        {SORTING_FIELDS_DISPLAY[SORTING_FIELDS.indexOf(field)]}
                    </button>
                ))}
            </div>
            <div className={styles.resultsWrapper}>
                <div className={styles.results}>
                    {debauncedSearchQuery &&
                        (paintings.length ? (
                            <PaintingList
                                variant="default"
                                paintings={sortedPaintings}
                            />
                        ) : (
                            <h3 className={styles.zeroMatches}>
                                No maches for{' '}
                                <mark>'{debauncedSearchQuery}'</mark>
                            </h3>
                        ))}
                </div>
            </div>
        </section>
    );
}
