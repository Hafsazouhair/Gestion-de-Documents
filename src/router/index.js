// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DefaultMain from '@/layouts/Main.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import HomePage from '@/views/Home.vue';
import DashboardPage from '@/views/Dashboards/DashboardPage.vue';
import UsersManagement from '@/views/Dashboards/UsersManagement.vue';
import DocumentsManagement from '@/views/Dashboards/DocumentsManagement.vue';
import CategoriesManagement from '@/views/Dashboards/CategoriesManagement.vue';
import PermissionsManagement from '@/views/Dashboards/PermissionsManagement.vue';
import DocumentPage from '@/views/Dashboards/DocumentPage.vue';



import LoginPage from '@/views/Auth/Login.vue';
import RegisterPage from '@/views/Auth/Register.vue';

const routes = [
  {
    path: '/',
    component: DefaultMain,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
      },
      {
        path: 'login',
        name: 'Login',
        component: LoginPage,
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterPage,
      },
    ],
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'DashboardPage',
        component: DashboardPage,
      },
      {
        path: 'users',
        name: 'UsersManagement',
        component: UsersManagement,
      },
      {
        path: 'Documents',
        name: 'DocumentsManagement',
        component: DocumentsManagement,
      },
      {
        path: 'Categories',
        name: 'CategoriesManagement',
        component: CategoriesManagement,
      },
      {
        path: 'Permissions',
        name: 'PermissionsManagement',
        component: PermissionsManagement,
      },
      {
        path: 'DocumentPage',
        name: 'DocumentPage',
        component: DocumentPage,
      },
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
