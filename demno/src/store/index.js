import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { state, mutations, getters } from '../store/mutations.js'
import actions from '../store/actions.js'
import menu from '../store/modules/menu'
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: { menu }
})