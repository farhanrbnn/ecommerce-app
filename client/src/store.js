import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		order: localStorage.getItem('order')
	},
	mutations: {
		addOrder: (state, product) => {
			state.order = product
			localStorage.setItem('order', product)
		}
	}
})