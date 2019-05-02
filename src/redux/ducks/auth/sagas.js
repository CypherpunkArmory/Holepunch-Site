import { call, put, takeEvery } from 'redux-saga/effects'
import { navigate } from 'gatsby'
import types from './types'
import { performEmailLogin, performLogout } from './actions'
import { setCurrentAccount } from '../account/actions'
import { axiosRequest, setAuthorizationToken } from '../../helpers/axiosRequest'
import apiEndpoints from '../../helpers/apiEndpoints'

export function* emailLogin(action) {
  const data = {
    email: action.payload.email,
    password: action.payload.password,
  }

  put(performEmailLogin.request())
  try {
    const JWTokens = yield call(
      axiosRequest,
      apiEndpoints.emailLogin,
      'POST',
      data
    )
    const account = {
      email: action.payload.email,
      APIKey: JWTokens.access_token,
    }

    setAuthorizationToken(JWTokens.access_token)
    localStorage.setItem(
      'authToken',
      JSON.stringify({ ...JWTokens, ...account })
    )
    yield put(performEmailLogin.success())
    yield put(setCurrentAccount(account))
    yield navigate('/account/overview')

    return JWTokens
  } catch (error) {
    yield put(performEmailLogin.failure(error.response.data.data))
  }
}

export function* logout() {
  put(performLogout.request())
  try {
    yield put(performLogout.success({ email: '' }))
    localStorage.removeItem('authToken')
    return {}
  } catch (error) {
    yield put(performLogout.failure(error))
  }
}

export default function* watchAuth() {
  return [
    yield takeEvery(types.EMAIL_LOGIN['REQUEST'], emailLogin),
    yield takeEvery(types.LOGOUT['REQUEST'], logout),
  ]
}
