import { PageTemplate } from '#/components/PageTemplate';
import defaultImage from '#/assets/images/default-painting.png';

export function PaintingInfo() {
    return (
        <PageTemplate>
            <img src={defaultImage} alt="image" />
        </PageTemplate>
    );
}
