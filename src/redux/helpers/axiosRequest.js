import axios from 'axios'
import { call, put } from 'redux-saga/effects'
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

export function* xhr(
  config = {
    method: 'GET',
    data: {},
    responseType: 'json',
    headers: {},
  },
  options = { auth: false, actionCreator: null }
) {
  const { auth, actionCreator } = options

  if (auth) {
    const authTokens = getAuthTokens()
    if (authTokens && _.has(authTokens, 'access_token')) {
      config = {
        ...config,
        headers: {
          ['Authorization']: `Bearer ${authTokens.access_token}`,
        },
      }
    }
  }

  try {
    const response = yield call(axiosInstance, config)
    yield _.isObject(actionCreator) && put(actionCreator.success(response.data))
    return response
  } catch (error) {
    yield _.isObject(actionCreator) &&
      put(actionCreator.failure(error.response.data.data))
      throw error
  }
}

export default axiosInstance
