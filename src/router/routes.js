
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/Home.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/Settings.vue')
      },
      {
        path: '/auth',
        component: () => import('pages/Auth.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
