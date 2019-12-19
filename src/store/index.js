import Vue from 'vue'
import Vuex from 'vuex'

import { SET_GLOBAL_ERROR_MESSAGE } from './mutation_types'

import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: {
      // 公共模块
      namespaced: true,
      ...common,
    },
    user: {
      // 用户模块
      namespaced: true,
      ...user,
    },
  },
  // 全局
  state: {
    globalErrorMessage: '',
  },
  mutations: {
    [SET_GLOBAL_ERROR_MESSAGE](state, payload) {
      state.globalErrorMessage = payload
    },
  },
  actions: {
    setGlobalErrorMessage(context, payload) {
      context.commit(SET_GLOBAL_ERROR_MESSAGE, payload)
      setTimeout(() => context.commit(SET_GLOBAL_ERROR_MESSAGE, ''), 3000)
    },
  },
})