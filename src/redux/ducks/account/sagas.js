import { call, put, takeEvery } from 'redux-saga/effects'
import { navigate } from 'gatsby'
import types from './types'
import {
  performEmailLogin,
  performRegister,
  performLogout,
  sendEmailConfirmation,
} from './actions'
import { axiosRequest } from '../../helpers/axiosRequest'
import apiEndpoints from '../../helpers/apiEndpoints'

export function* register(action) {
  const data = {
    email: action.email,
    password: action.password,
  }
  put(performRegister.request())
  try {
    const account = yield call(
      axiosRequest,
      apiEndpoints.register,
      'POST',
      data
    )
    yield put(performRegister.success({ account, email: action.email }))
    yield navigate('/email_sent')
    return account
  } catch (error) {
    yield put(performRegister.failure(error.response.data.data))
  }
}

export function* emailLogin(action) {
  const data = {
    email: action.email,
    password: action.password,
  }
  put(performEmailLogin.request())
  try {
    const account = yield call(
      axiosRequest,
      apiEndpoints.emailLogin,
      'POST',
      data
    )
    yield navigate('/app/home')
    yield put(performEmailLogin.success(account))
    localStorage.setItem('authToken', JSON.stringify(account))
    return account
  } catch (error) {
    yield put(performEmailLogin.failure(error.response.data.data))
  }
}

export function* logout() {
  put(performLogout.request())
  try {
    yield put(performLogout.success())
    localStorage.removeItem('authToken')
    return {}
  } catch (error) {
    yield put(performLogout.failure(error))
  }
}

export function* resendConfirmationEmail(action) {
  put(sendEmailConfirmation.request())
  try {
    const request = yield call(axiosRequest, apiEndpoints.resendConfirmationEmail, 'POST', {
      email: action.email,
    })
    yield put(sendEmailConfirmation.success())
    return request
  } catch (error) {
    yield put(sendEmailConfirmation.failure(error))
  }
}

export default function* watchFetchAccount() {
  return [
    yield takeEvery(types.EMAIL_LOGIN['REQUEST'], emailLogin),
    yield takeEvery(types.REGISTER['REQUEST'], register),
    yield takeEvery(types.LOGOUT['REQUEST'], logout),
    yield takeEvery(
      types.SEND_EMAIL_CONFIRMATION['REQUEST'],
      resendConfirmationEmail
    ),
  ]
}
