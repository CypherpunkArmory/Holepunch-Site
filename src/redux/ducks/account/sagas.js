import { call, put, takeEvery } from 'redux-saga/effects'
import { navigate } from 'gatsby'
import types from './types'
import {
  performRegister,
  sendResetEmail,
  updateAccount,
  sendEmailConfirmation,
  deleteAccount,
  getConfirmationToken,
} from './actions'
import { performLogout } from '../auth/actions'
import { emailLogin } from '../auth/sagas'
import { axiosRequest, xhr } from '../../helpers/axiosRequest'
import apiEndpoints from '../../helpers/apiEndpoints'

export function* register(action) {
  const xhrConfig = {
    url: apiEndpoints.register,
    method: 'POST',
    data: {
      data: {
        type: 'user',
        attributes: {
          email: action.payload.email,
          password: action.payload.password,
        },
      },
    },
  }
  put(performRegister.request())
  try {
    const registerRequest = yield call(xhr, xhrConfig, {
      auth: true,
      actionCreator: performRegister,
    })
    yield navigate('/email_sent')
    return registerRequest
  } catch (error) {
    return null
  }
}

export function* resetEmail(action) {
  const data = {
    data: {
      type: 'password_reset',
      attributes: {
        email: action.payload.email,
      },
    },
  }

  put(sendResetEmail.request())
  try {
    yield call(axiosRequest, apiEndpoints.resetPassword, 'POST', data)
    yield put(sendResetEmail.success({ email: action.payload.email }))
    yield navigate('/email_sent')
    return {}
  } catch (error) {
    yield put(sendResetEmail.failure(error))
  }
}

export function* fetchConfirmationToken(action) {
  put(getConfirmationToken.request())

  try {
    const JWTokens = yield call(
      axiosRequest,
      `${apiEndpoints.confirmationToken}/${action.payload.JWToken}`,
      'GET'
    )
    // setAuthorizationToken(JWTokens.access_token)
    yield put(getConfirmationToken.success())
    return {}
  } catch (error) {
    yield put(getConfirmationToken.failure(error))
  }
}

export function* updateAccountDetails(action) {
  const data = {
    data: {
      type: 'user',
      attributes: { ...action.payload.newDetails },
    },
  }

  try {
    const xhrConfig = {
      method: 'PATCH',
      data: {
        data: {
          type: 'user',
          attributes: { ...action.payload.newDetails },
        },
      },
      responseType: 'json',
      url: apiEndpoints.updateAccount,
    }

    const account = yield call(xhr, xhrConfig, {
      auth: true,
      actionCreator: updateAccount,
    })
    console.log(account)

    // const accountDetails = account.data.attributes
    // const email = accountDetails.email
    // if (localStorage.authToken) {
    //   const JWTokens = JSON.parse(localStorage.getItem('authToken'))
    //   localStorage.setItem('authToken', JSON.stringify({ ...JWTokens, email }))
    // }
    return {}
  } catch (error) {
    console.log(error)
  }
}

export function* passwordUpdate(action) {
  const data = {
    data: {
      type: 'user',
      attributes: { ...action.payload.newDetails },
    },
  }

  put(updateAccount.request())

  try {
    const account = yield call(
      axiosRequest,
      apiEndpoints.updateAccount,
      'PATCH',
      data
    )
    const accountDetails = account.data.attributes
    const email = accountDetails.email

    if (localStorage.authToken) {
      const JWTokens = JSON.parse(localStorage.getItem('authToken'))
      localStorage.setItem('authToken', JSON.stringify({ ...JWTokens, email }))
    }
    yield put(updateAccount.success(accountDetails))
    yield call(emailLogin, {
      payload: {
        email: accountDetails.email,
        password: action.payload.newDetails.new_password,
      },
    })
    return accountDetails
  } catch (error) {
    yield put(updateAccount.failure(error))
  }
}

export function* removeAccount(action) {
  const data = {
    password: action.payload.password,
  }

  put(deleteAccount.request())

  try {
    yield call(axiosRequest, apiEndpoints.updateAccount, 'DELETE', data)

    yield put(deleteAccount.success({}))
    yield put(performLogout.request())
    return {}
  } catch (error) {
    yield put(deleteAccount.failure(error))
  }
}

export function* resendConfirmationEmail(action) {
  put(sendEmailConfirmation.request())
  try {
    const request = yield call(
      axiosRequest,
      apiEndpoints.resendConfirmationEmail,
      'POST',
      {
        data: {
          type: 'email_confirm',
          attributes: {
            email: action.payload.email,
          },
        },
      }
    )
    yield put(sendEmailConfirmation.success())
    return request
  } catch (error) {
    yield put(sendEmailConfirmation.failure(error))
  }
}

export default function* watchFetchAccount() {
  return [
    yield takeEvery(types.REGISTER['REQUEST'], register),
    yield takeEvery(types.SEND_RESET_EMAIL['REQUEST'], resetEmail),
    yield takeEvery(types.UPDATE_ACCOUNT['REQUEST'], updateAccountDetails),
    yield takeEvery(types.UPDATE_ACCOUNT_PASSWORD['REQUEST'], passwordUpdate),
    yield takeEvery(types.DELETE_ACCOUNT['REQUEST'], removeAccount),
    yield takeEvery(
      types.GET_CONFIRMATION_TOKEN['REQUEST'],
      fetchConfirmationToken
    ),
    yield takeEvery(
      types.SEND_EMAIL_CONFIRMATION['REQUEST'],
      resendConfirmationEmail
    ),
  ]
}
