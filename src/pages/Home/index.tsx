import { PageTemplate } from '#/components/PageTemplate';
import styles from './styles.module.scss';

export function Home() {
    return (
        <PageTemplate>
            <div className={styles.container}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate illo voluptatibus quibusdam a minus ipsum enim
                    natus, facere fugit maiores doloribus error! Esse laudantium
                    deserunt, maiores possimus omnis quia beatae enim dolore,
                    tempora, accusamus odio quo. Ipsam laborum, deleniti maiores
                    dolor fugit vitae obcaecati, iusto et non quaerat possimus
                    nemo.
                </p>
            </div>
        </PageTemplate>
    );
}
