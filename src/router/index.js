import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '../components/Store/GlobalStore.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/catalogueEdit'

  },
  {
    path: '/loginform',
    name: 'LoginForm',
    component: () => import('../components/LoginForm.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/loggedOn',
    name: 'LoggedIn',
    component: () => import('../components/HomePage.vue'),
    //meta: {requiresAuth: false}
  },
  {
    path: '/loginFailed',
    name: 'LoginFail',
    component: () => import('../components/LoginFailed.vue')
  },
  {
   path: '/catalogueEdit',
   name: 'CatalogueEdit',
   component: () => import('../components/CatalogueEdit.vue'),
   //meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (store.getters.isLoggedIn) {
      next('/catalogueEdit')
      return
    }
    next('/')
  } 
  else{
    next()
  }
})*/
export default router
