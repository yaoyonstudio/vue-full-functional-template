import axios from 'axios'

axios.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    if (error.response.status === 401) {
      console.log('unauthorized, logging out ...')
    }
    return Promise.reject(error)
  }
)

export default function(url, method, params, fn, errFn) {
  const _headers = {
    'content-type': 'application/json',
  }

  const access_token = localStorage.getItem('access_token')

  if (access_token) {
    _headers['Authorization'] = `Bearer ${access_token}`
  }

  if (window.hasGlobalError) return

  return axios({
      url: url,
      method: method,
      headers: _headers,
      data: params,
    })
    .then(
      res => {
        if (res.status) {
          if (res.data.code === -400) {
            localStorage.clear()
            window.location.href = process.env.VUE_APP_PREFIX + '/#/login'
            return
          } else {
            fn(res.data)
          }
        } else {
          if (errFn) {
            errFn(res)
          } else {
            console.log(res)
          }
        }
      },
      error => {
        console.log('Global Ajax Error:', error, error.response, error.status)
        if (error.response.status === 401 || error.response.status === 403) {
          window.localStorage.clear()
          window.location.href = process.env.VUE_APP_PREFIX + '/#/login'
        }
        if (window.globalErrorHandler) {
          window.globalErrorHandler()
          window.hasGlobalError = true
          setTimeout(() => {
            window.hasGlobalError = false
          }, 3000)
        }
      }
    )
    .catch(error => {
      console.log('error', error)
    })
}