import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Intro.vue'
import Component from '../views/Component.vue'
import Product from '../views/Product.vue'
import Detail from '../views/ProductDetail.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/component',
        name: 'component',
        component: Component
    },
    {
        path: '/product',
        name: 'product',
        component: Product,
        children: [{
            path: ':id',
            name: 'detail',
            component: Detail
        }]
    }

]

const router = new VueRouter({
    routes
})

export default router