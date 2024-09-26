import { PageTemplate } from '#/components/PageTemplate';
import { PaintingInfo } from '#/components/PaintingInfo';
import { useParams } from 'react-router-dom';

export function PaintingInfoPage() {
    const { id } = useParams();
    return (
        <PageTemplate>
            <PaintingInfo paintingId={Number.parseInt(id as string)} />
        </PageTemplate>
    );
}
