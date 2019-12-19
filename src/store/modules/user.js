import { LOGIN, LOGOUT } from '../mutation_types'

import userService from '../../services/user'

import { isFunction, getValue, setValue, clearStorage } from '../../libs/Utils'

export default {
  state: {
    isLogin: getValue('token') ? true : false, // user is login
    user: {
      // user info
      username: getValue('username') || '',
      token: getValue('token') || '',
    },
  },
  mutations: {
    /**
     * login mutation
     * @param {VuexState} state
     * @param {Object} payload - login payload({ username: String, token: String })
     */
    [LOGIN](state, payload) {
      const { username, token } = payload

      state.isLogin = true
      state.user = {
        username,
        token,
      }

      setValue('username', username)
      setValue('token', token)
    },

    /**
     * logout mutation
     * @param {VuexSate} state
     */
    [LOGOUT](state) {
      state.isLogin = false
      state.user = {
        username: '',
        token: '',
      }

      clearStorage()
    },
  },
  actions: {
    /**
     * login action
     * @param {VuexContext} context
     * @param {Object} payload - payload({ params: Object, callback: Function })
     *                    - params: login params({ username: String, password: String })
     *                    - callback: login callback
     */
    loginAction(context, payload) {
      const { params, callback } = payload

      userService.loginService(params, res => {
        setTimeout(() => {
          if (isFunction(callback)) {
            callback(res)
          }

          const { username, password } = params
          if (username === res.username && password === res.password) {
            context.commit(LOGIN, res)
          } else {
            context.dispatch('setGlobalErrorMessage', '用户名或密码错误', { root: true })
          }
        }, 500)
      })
    },
    /**
     * logout action
     * @param {VuexContext} context
     */
    logoutAction(context) {
      context.commit(LOGOUT)
    },
  },
  getters: {},
}
