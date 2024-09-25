import { useState } from 'react';
import { PaintingList } from '#components/PaintingList';
import { Subtitle } from '#components/Subtitle';
import { usePaintingsSearch } from '#hooks/usePaintingsSearch';
import { FOR_YOU_PAGES, FOR_YOU_QUERY } from '#constants/recs';
import styles from './styles.module.scss';

export function OtherWorks() {
    const [page] = useState<number>(
        Math.floor(Math.random() * FOR_YOU_PAGES) + 1,
    );
    const [paintings] = usePaintingsSearch(FOR_YOU_QUERY, 9, page);
    return (
        <section className={styles.otherWorks}>
            <Subtitle
                firstPhrase="Here some more"
                secondPhrase="Other works for you"
            />
            <PaintingList variant="default" paintings={paintings} />
        </section>
    );
}
