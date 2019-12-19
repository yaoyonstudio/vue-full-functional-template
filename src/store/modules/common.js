import { GET_COMMON_DATA } from '../mutation_types'

import commonService from '../../services/common'

import { isFunction } from '../../libs/Utils'

export default {
  state: {
    title: '', // site title
    description: '', // site description
  },
  mutations: {
    /**
     * get common data mutation
     * @param {VueState} state
     * @param {Object} payload - get common data payload({ appTitle: String, appDescription: String })
     */
    [GET_COMMON_DATA](state, payload) {
      const { appTitle, appDescription } = payload
      state.title = appTitle
      state.description = appDescription
    },
  },
  actions: {
    /**
     * get common data action
     * @param {VuexContext} context
     * @param {Object} payload - get common data action payload({ callback!: Function})
     */
    getCommonDataAction(context, payload) {
      const { callback } = payload
      commonService.getCommonDataService(res => {
        setTimeout(() => {
          if (isFunction(callback)) callback(res)
          context.commit(GET_COMMON_DATA, res)
        }, 500)
      })
    },
  },
  getters: {},
}
