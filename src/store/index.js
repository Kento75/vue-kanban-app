import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態 Auth と状態 Board を Vuex の state で一言管理できるように定義
const state = {
  auth: {
    token: null,
    userId: null,
  },
  board: {
    lists: [],
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
