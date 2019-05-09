import { call, put, takeEvery } from 'redux-saga/effects'
import { navigate } from 'gatsby'
import types from './types'

import { performEmailLogin, performLogout } from './actions'
import { setCurrentAccount } from '../account/actions'
import xhr from '../../helpers/xhr'
import { setTokens, clearTokens } from '../../helpers/localStorage'
import apiEndpoints from '../../helpers/apiEndpoints'

export function* emailLogin(action) {
  const xhrConfig = {
    method: 'POST',
    data: {
      email: action.payload.email,
      password: action.payload.password,
    },
    responseType: 'json',
    url: apiEndpoints.emailLogin,
  }

  try {
    const sessionRequest = yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: performEmailLogin,
    })
    const JWTokens = sessionRequest.data
    const account = {
      email: action.payload.email,
      APIKey: JWTokens.access_token,
    }

    setTokens({ ...JWTokens, ...account })
    yield put(setCurrentAccount(account))
    yield navigate('/account/overview')

    return JWTokens
  } catch (error) {
    return error
  }
}

export function* logout() {
  put(performLogout.request())
  try {
    yield put(performLogout.success())
    yield put(
      setCurrentAccount({
        email: '',
        APIKey: '',
      })
    )
    clearTokens()
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
