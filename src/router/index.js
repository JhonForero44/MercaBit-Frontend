import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),  // Layout principal  
    children: [
      {
        path: '',
        name: 'Pagina de Inicio-Login',
        component: () => import('@/views/LoginView.vue')  // Ruta base (Página de inicio)
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes                         // Usa las rutas definidas arriba
})

export default router  