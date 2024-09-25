import bookmarkIcon from '#/assets/icons/bookmark-bright.svg';
import { Icon, IconProps } from '#components/Icon';

export type BookmarkProps = Omit<IconProps, 'icon' | 'alt'>;

export function Bookmark({ active, onClick }: BookmarkProps) {
    return (
        <Icon
            icon={bookmarkIcon}
            alt="Adding to favorites button"
            active={active}
            onClick={onClick}
        />
    );
}
