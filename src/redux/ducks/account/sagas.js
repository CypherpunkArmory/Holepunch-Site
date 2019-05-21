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
  revokeTokens,
} from './actions'
import { getTokens, setTokens } from '../../helpers/localStorage'
import { performLogout } from '../auth/actions'
import { emailLogin } from '../auth/sagas'
import { setCurrentAccount } from '../account/actions'
import xhr from '../../helpers/xhr'
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

  try {
    const registerRequest = yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: performRegister,
    })
    yield put(setCurrentAccount({ email: action.payload.email }))
    yield navigate('/email_sent')
    return registerRequest
  } catch (error) {
    return error
  }
}

export function* resetEmail(action) {
  const xhrConfig = {
    url: apiEndpoints.resetPassword,
    method: 'POST',
    data: {
      data: {
        type: 'password_reset',
        attributes: {
          email: action.payload.email,
        },
      },
    },
  }

  try {
    yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: sendResetEmail,
    })
    yield put(setCurrentAccount({ email: '', APIKey: '' }))
    yield navigate('/email_sent')
    return {}
  } catch (error) {
    return error
  }
}

export function* fetchConfirmationToken(action) {
  const xhrConfig = {
    url: `${apiEndpoints.confirmationToken}/${action.payload.JWToken}`,
    method: 'GET',
  }

  try {
    const tokenRequest = yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: getConfirmationToken,
    })

    if (tokenRequest.status === 204) {
      yield navigate('/login', {
        state: {
          signupSuccess: true,
        },
      })
      return null
    }
    const JWTokens = tokenRequest.data
    setTokens({ ...JWTokens })
    return JWTokens
  } catch (error) {
    if (error.response.status === 403) {
      yield navigate('/bad_token')
    }
    return error
  }
}

export function* updateAccountDetails(action) {
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

  try {
    const accountRequest = yield call(xhr, xhrConfig, {
      auth: true,
      actionCreator: updateAccount,
    })
    const account = accountRequest.data
    const accountDetails = account.data.attributes
    const email = accountDetails.email

    const JWTokens = getTokens()
    if (JWTokens) {
      setTokens({ ...JWTokens, email })
    }

    return account
  } catch (error) {
    return error
  }
}

export function* removeAccount(action) {
  const xhrConfig = {
    method: 'DELETE',
    data: {
      data: {
        type: 'user',
        attributes: {
          password: action.payload.password,
        },
      },
    },
    responseType: 'json',
    url: apiEndpoints.updateAccount,
  }

  try {
    yield call(xhr, xhrConfig, {
      auth: true,
      actionCreator: deleteAccount,
    })

    yield put(performLogout.request())
    return null
  } catch (error) {
    return error
  }
}

export function* resetAccountPassword(action) {
  try {
    const accountRequest = yield call(updateAccountDetails, {
      payload: {
        newDetails: {
          new_password: action.payload.new_password,
        },
      },
    })

    const accountDetails = accountRequest.data.data.attributes

    yield call(emailLogin, {
      payload: {
        email: accountDetails.email,
        password: action.payload.new_password,
      },
    })
  } catch (error) {
    return error
  }
}

export function* resendConfirmationEmail(action) {
  const xhrConfig = {
    url: apiEndpoints.resendConfirmationEmail,
    method: 'POST',
    data: {
      data: {
        type: 'email_confirm',
        attributes: {
          email: action.payload.email,
        },
      },
    },
  }

  try {
    const request = yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: sendEmailConfirmation,
    })
    return request
  } catch (error) {
    return error
  }
}

export function* revokeAccountTokens(action) {
  const xhrConfig = {
    url: apiEndpoints.revokeTokens,
    method: 'DELETE',
  }

  try {
    const revokeRequest = yield call(xhr, xhrConfig, {
      auth: true,
      actionCreator: revokeTokens,
    })
    yield put(performLogout.request())

    return revokeRequest
  } catch (error) {
    return error
  }
}

export default function* watchFetchAccount() {
  return [
    yield takeEvery(types.REGISTER['REQUEST'], register),
    yield takeEvery(types.SEND_RESET_EMAIL['REQUEST'], resetEmail),
    yield takeEvery(types.UPDATE_ACCOUNT['REQUEST'], updateAccountDetails),
    yield takeEvery(types.DELETE_ACCOUNT['REQUEST'], removeAccount),
    yield takeEvery(types.RESET_PASSWORD['REQUEST'], resetAccountPassword),
    yield takeEvery(
      types.GET_CONFIRMATION_TOKEN['REQUEST'],
      fetchConfirmationToken
    ),
    yield takeEvery(
      types.SEND_EMAIL_CONFIRMATION['REQUEST'],
      resendConfirmationEmail
    ),
    yield takeEvery(types.REVOKE_TOKEN['REQUEST'], revokeAccountTokens),
  ]
}
