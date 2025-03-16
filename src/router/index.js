import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';  // 修正
import DailyPhrases from '../views/DailyPhrases.vue';  // 修正
import CasualSlang from '../views/CasualSlang.vue';  // 修正
import TravelPhrases from '../views/TravelPhrases.vue';  // 修正
import EnglishIdioms from '../views/EnglishIdioms.vue';  // 修正

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // 修正
  },
  {
    path: '/daily',
    name: 'Daily',
    component: DailyPhrases,  // 修正
  },
  {
    path: '/slang',
    name: 'Slang',
    component: CasualSlang,  // 修正
  },
  {
    path: '/travel',
    name: 'Travel',
    component: TravelPhrases,  // 修正
  },
  {
    path: '/idioms',
    name: 'Idioms',
    component: EnglishIdioms,  // 修正
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
