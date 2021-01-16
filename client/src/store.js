import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order: JSON.parse(localStorage.getItem('order'))
  },
  mutations: {
    addOrder: (state, product) => {
      const arrProduct = []
      const storedData = localStorage.getItem('order')

      if (storedData) {
        const parseStored = JSON.parse(storedData)
        parseStored.push(product)

        const parsed = JSON.stringify(parseStored)
        state.order = parseStored

        return localStorage.setItem('order', parsed)
      }

      arrProduct.push(product)

      const parse = JSON.stringify(arrProduct)
      state.order = arrProduct

      return localStorage.setItem('order', parse)
    }
  }
})
