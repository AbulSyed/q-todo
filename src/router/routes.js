import { authService } from 'src/boot/firebase'

const requireAuth = (to, from, next) => {
  const user = authService.currentUser
  if(!user){
    next('/auth')
  }else{
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  const user = authService.currentUser
  if(user){
    next('/')
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/Home.vue'),
        beforeEnter: requireAuth
      },
      {
        path: '/settings',
        component: () => import('pages/Settings.vue'),
        beforeEnter: requireAuth
      },
      {
        path: '/auth',
        component: () => import('pages/Auth.vue'),
        beforeEnter: requireNoAuth
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
