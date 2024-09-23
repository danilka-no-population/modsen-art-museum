import homeIcon from './assets/icons/home.svg';
import { Home } from '#pages/Home';

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
};
