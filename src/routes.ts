import homeIcon from './assets/icons/home.svg';
import bookmarkIcon from './assets/icons/bookmark-light.svg';
import { Home } from '#pages/Home';
import { PaintingInfoPage } from '#/pages/PaintingInfoPage';
import { Favorites } from '#pages/Favorites';

export const ROUTES = {
    home: {
        basePath: '/',
        component: Home,
        link: {
            text: 'Home',
            icon: homeIcon,
        },
        getRoutePath() {
            return `${this.basePath}`;
        },
        getPath() {
            return `${this.basePath}`;
        },
    },
    info: {
        basePath: '/painting',
        component: PaintingInfoPage,
        link: null,
        getRoutePath() {
            return `${this.basePath}/:id`;
        },
        getPath(id: number | string) {
            return `${this.basePath}/${id}`;
        },
    },
    favorites: {
        basePath: '/favorites',
        component: Favorites,
        link: {
            text: 'Your favorites',
            icon: bookmarkIcon,
        },
        getRoutePath() {
            return `${this.basePath}`;
        },
        getPath() {
            return `${this.basePath}`;
        },
    },
};
