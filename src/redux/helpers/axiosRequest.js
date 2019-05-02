import axios from 'axios'
import _ from 'lodash'

const getAuthTokens = () =>
  !!localStorage.getItem('authToken') &&
  JSON.parse(localStorage.getItem('authToken'))

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
  },
})

export const setAuthorizationToken = token =>
  token
    ? (axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`)
    : delete axiosInstance.defaults.headers.common['Authorization']

axiosInstance.interceptors.request.use(
  config => {
    const authTokens = getAuthTokens()
    if (authTokens && _.has(authTokens, 'access_token')) {
      setAuthorizationToken(authTokens.access_token)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    const originalRequest = error.config

    if (error.response.status === 401) {
      const authToken = localStorage.getItem('authToken')
      const { refresh_token } = JSON.parse(authToken)
      setAuthorizationToken(refresh_token)
      return axiosInstance
        .put('http://localhost:5000/session')
        .then(JWT => {
          localStorage.setItem(
            'authToken',
            JSON.stringify({ refresh_token, ...JWT })
          )
          setAuthorizationToken(JWT.access_token)
          originalRequest.headers['Authorization'] = `Bearer ${
            JWT.access_token
          }`

          return axios(originalRequest)
        })
        .catch(err => {
          return err
        })
    }
    return Promise.reject(error)
  }
)

export const axiosRequest = (
  url,
  requestType = 'GET',
  data = {},
  headers = {}
) => {
  const config = {
    method: requestType,
    data: data,
    responseType: 'json',
    url: url,
    headers: headers,
  }

  return axiosInstance(config).then(response => {
    return response
  })
}
