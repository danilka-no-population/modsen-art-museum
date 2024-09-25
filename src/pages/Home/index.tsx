import { PageTemplate } from '#/components/PageTemplate';
import { Title } from '#/components/Title';
import { SearchInput } from '#/components/SearchInput';
import { Subtitle } from '#components/Subtitle';
import styles from './styles.module.scss';

export function Home() {
    return (
        <PageTemplate>
            <div className={styles.container}>
                <Title>
                    Let's Find Some <mark>Art</mark>
                    {`\n`}Here!
                </Title>
                <SearchInput placeholder="Search art, artist, work..." />
                <Subtitle
                    firstPhrase="Topics for you"
                    secondPhrase="Our special gallery"
                ></Subtitle>
            </div>
        </PageTemplate>
    );
}
