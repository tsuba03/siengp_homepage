import { createRouter, createWebHistory } from 'vue-router';
import TopPage from './views/TopPage.vue';
import BbsPage from './views/BbsPage.vue';
import BbsRequestPage from './views/BbsRequestPage.vue';
import StudentSurveyPage from './views/StudentSurveyPage.vue';
import VgPage from './views/VgPage.vue';
import PeerPage from './views/PeerPage.vue';
import FlapPage from './views/FlapPage.vue';
import MemberPage from './views/MemberPage.vue';
import NewsListPage from './views/NewsListPage.vue';
import PeerNote20250716 from './views/news/PeerNote20250716.vue';
import Kitmee20250515 from './views/news/Kitmee20250515.vue';
import Kikai20250602 from './views/news/Kikai20250602.vue';
import Ooo20250602 from './views/news/Ooo20250602.vue';
import StuSurv20250609 from './views/news/StuSurv20250609.vue';
import Vg20250602 from './views/news/Vg20250602.vue';
import Vg20250702 from './views/news/Vg20250702.vue';
import Vg20251003 from './views/news/Vg20251003.vue';

const routes = [
    { path: '/', component: TopPage, alias: '/index.html' },
  { path: '/bbs', component: BbsPage },
  { path: '/bbs/request', component: BbsRequestPage },
  { path: '/studentsurvey', component: StudentSurveyPage },
  { path: '/vg', component: VgPage },
  { path: '/peer', component: PeerPage },
  { path: '/flap', component: FlapPage },
  { path: '/news', component: NewsListPage },
  { path: '/news/peer-note-20250716', component: PeerNote20250716 },
  { path: '/news/home-coming-day-20250702', component: Vg20250702 },
  { path: '/news/kitmee-20250515', component: Kitmee20250515 },
  { path: '/news/kikai-20250602', component: Kikai20250602 },
  { path: '/news/ooo-20250602', component: Ooo20250602 },
  { path: '/news/stu-surv-20250609', component: StuSurv20250609 },
  { path: '/news/vg-20250602', component: Vg20250602 },
  { path: '/news/vg-20251003', component: Vg20251003 },
  { path: '/member', component: MemberPage },
];

const router = createRouter({
  history: createWebHistory('/ScienceTokyo/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        top: 120, // ヘッダーの高さ分のオフセット
        behavior: 'smooth',
      };
    }
    // ページの先頭にスクロール
    return { top: 0, left: 0 };
  },
});

export default router;