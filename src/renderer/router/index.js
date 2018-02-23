import Vue from 'vue';
import Router from 'vue-router';

import TodayPage from '@/components/TodayPage';
import HistoryPage from '@/components/HistoryPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'today-page',
      component: TodayPage,
    },
    {
      path: '/history',
      name: 'history-page',
      component: HistoryPage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
