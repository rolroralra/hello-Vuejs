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
        path: '/component',
        name: 'Component',
        component: Component
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        children: [{
            path: '/product/:id',
            name: 'Detail',
            component: Detail
        }, ],
        beforeEnter: (to, from, next) => {
            console.log('route to product component');
            next();
        }
    }
]

const router = new VueRouter({
    routes
})

export default router