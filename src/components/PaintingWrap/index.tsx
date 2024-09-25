import { PaintingBig, BigPaintingProps } from '#components/BigPainting';
import {
    DefaultPainting,
    DefaultPaintingProps,
} from '#components/DefaultPainting';

export type PaintingProps = DefaultPaintingProps &
    BigPaintingProps & {
        variant?: 'default' | 'big';
    };

export function Painting({ variant = 'default', ...props }: PaintingProps) {
    const PaintingElement = {
        'default': DefaultPainting,
        'big': PaintingBig,
    }[variant];

    return <PaintingElement {...props} />;
}
