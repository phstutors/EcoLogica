import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Perfil from './components/profile.vue';
import Cadastro from './components/Cadastro.vue';

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/perfil',
    component: Perfil
  },
  {
    path: '/cadastro',
    component: Cadastro
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
