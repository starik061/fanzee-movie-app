import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MainPage from '@/components/MainPage.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'MainPage',
        path: '',
        component: MainPage,
      },
      {
        path: '/movie/:id',
        name: 'MovieDetails',
        component: () => import('@/components/MovieDetails.vue'), // Ленивая загрузка
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
