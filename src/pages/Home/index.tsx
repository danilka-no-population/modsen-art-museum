import { PageTemplate } from '#/components/PageTemplate';
import { Gallery } from '#/components/Gallery';
import { OtherWorks } from '#/components/OtherWorks';
import styles from './styles.module.scss';
import { SearchForm } from '#/components/SearchForm';

export function Home() {
    return (
        <PageTemplate>
            <div className={styles.container}>
                <SearchForm />
                <Gallery />
                <OtherWorks />
            </div>
        </PageTemplate>
    );
}
