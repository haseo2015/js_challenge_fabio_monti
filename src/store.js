import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = {
  cartItems: [],
  whishlistItems: []
}

export const mutations = {
  addTo: (state, data) => {
    if (data.position === 'cartItems') {
      state.cartItems.push(data.item)
    } else {
      state.whishlistItems.push(data.item)
    }
  },
  removeFrom: (state, data) => {
    if (data.position === 'cartItems') {
      state.cartItems.splice(data.index)
    } else {
      state.whishlistItems.splice(data.index)
    }
  }
}

export const actions = {
  ADD_TO: (ctx, payload) => { ctx.commit('addTo', payload) },
  REMOVE_FROM: (ctx, payload) => { ctx.commit('removeFrom', payload) }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
