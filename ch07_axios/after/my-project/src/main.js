import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();

router.beforeEach((to, from, next) => {
    console.log("route path:", from.path, "->", to.path);
    next();
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')