import { createRouter, createWebHashHistory } from 'vue-router';

import WeatherPage from '../pages/WeatherPage';
import AboutPage from '../pages/AboutPage';

const routes = [
    {
        path: '/',
        name: 'Weather',
        component: WeatherPage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
