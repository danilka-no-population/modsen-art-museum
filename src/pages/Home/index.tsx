import { PageTemplate } from '#/components/PageTemplate';
import { Title } from '#/components/Title';
import styles from './styles.module.scss';

export function Home() {
    return (
        <PageTemplate>
            <div className={styles.container}>
                <Title>
                    Let's Find Some <mark>Art</mark>
                    {`\n`}Here!
                </Title>
            </div>
        </PageTemplate>
    );
}
