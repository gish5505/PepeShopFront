import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../components/LoginForm.vue"
import ProductList from "../components/ProductList.vue"
import UserList from "../components/UserList.vue"
import OrderList from "../components/OrderList.vue"
//import store from '../components/Store/GlobalStore.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: "login"}

  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/products",
    name: "products",
    component: ProductList
  },
  {
    path: "/users",
    name: "users",
    component: UserList
  },
  {
    path: "/orders",
    name: "orders",
    component: OrderList
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
