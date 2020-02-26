import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = {
  cartItems: [],
  wishlistItems: []
}

export const mutations = {
  addTo: (state, data) => {
    if (data.position === 'cartItems') {
      state.cartItems.push(data.item)
    } else {
      state.wishlistItems.push(data.item)
    }
  },
  removeFrom: (state, data) => {
    if (data.position === 'cartItems') {
      state.cartItems.splice(data.index, 1)
    } else {
      state.wishlistItems.splice(data.index, 1)
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
