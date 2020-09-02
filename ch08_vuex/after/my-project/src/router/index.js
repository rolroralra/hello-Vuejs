import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Intro.vue'
import Component from '../views/Component.vue'
import Product from '../views/Product.vue'
import Detail from '../views/ProductDetail.vue'
import Axios from '../views/AxiosImg.vue'
import EventBus from '../views/EventBus.vue'
import Vuex from '../views/Vuex.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/component',
        name: 'Compoent',
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
    },
    {
        path: '/axios',
        name: 'Axios',
        component: Axios
    },
    {
        path: '/eventbus',
        name: 'Eventbus',
        component: EventBus
    }, {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex
    },
]

const router = new VueRouter({
    routes
})

export default router