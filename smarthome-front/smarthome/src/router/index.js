import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../components/Login.vue"
import HelloWorld from "../components/HelloWorld.vue"
import ProductList from "../components/ProductList.vue"
import OrderList from "../components/OrderList.vue"
import UserList from "../components/UserList.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/hello",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/products",
            name: "products",
            component: ProductList
        },
        {
            path: "/orders",
            name: "orders",
            component: OrderList
        },
        {
            path: "/users",
            name: "users",
            component: UserList
        }
    ]
})