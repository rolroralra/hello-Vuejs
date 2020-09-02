import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        changePromotion(context, payload) {
            if (payload.isPromotion) {
                context.dispatch('decreaseTotAndAmt', payload.amount);
            } else {
                context.dispatch('increaseTotAndAmt', payload.amount);
            }
        }
    },
    modules: {}
})