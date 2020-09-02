import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        total: 600,
        chargeAmount: 540
    },
    mutations: {
        totalIncrease(state, amount) {
            state.total += amount;
        },
        totalDecrease(state, amount) {
            state.total -= amount;
        },
        setChargeAmout(state) {
            state.chargeAmount = state.total * 0.9
        }
    },
    actions: {
        increaseTotAndAmt(context, amount) {
            context.commit('totalIncrease', amount);
            setTimeout(() => {
                context.commit('setChargeAmout');
            }, 1000);
        },
        decreaseTotAndAmt(context, amount) {
            context.commit('totalDecrease', amount);
            setTimeout(() => {
                context.commit('setChargeAmout');
            }, 1000);
        },
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