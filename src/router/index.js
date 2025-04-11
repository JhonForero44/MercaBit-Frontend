import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        path: '/registro',
        component: () => import('@/views/RegistroView.vue'),
      },
      {
        path: '/recuperar-contrasena',
        component: () => import('@/views/RecuperarContraseña.vue'),
      },
      {
        path: '/home',
        component: () => import('@/views/HomeView.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      {
        path: '/accerca-de-la-app',
        component: () => import('@/views/AcercaDeLaApp.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      {
        path: '/agregar-producto',
        component: () => import('@/views/AgregarProducto.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      {
        path: '/mis-publicaciones',
        component: () => import('@/views/MisPublicaciones.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      {
        path: '/Notification',
        component: () => import('@/views/NotificationView.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      /*
      {
        path: '/mi-cuenta',
        component: () => import('@/views/MiCuenta.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      {
        path: '/mis-ventas',
        component: () => import('@/views/MisVentasPage.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      
      {
        path: '/categorias',
        component: () => import('@/views/Categorias.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      {
        path: '/acerca-de-la-app',
        component: () => import('@/views/AcercaDeLaApp.vue'),
        meta: { requiresAuth: true, showMenu: true },
      },
      */
      // Puedes agregar más rutas aquí
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
