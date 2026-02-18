import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Login', 
    component: () => import('../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;