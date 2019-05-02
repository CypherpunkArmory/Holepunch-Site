import types from './types'
import actionFactory from '../../helpers/actionFactory'

export const performLogout = {
  request: account => actionFactory(types.LOGOUT['REQUEST'], {}),
  success: account => actionFactory(types.LOGOUT['SUCCESS'], {}),
  failure: error => actionFactory(types.LOGOUT['FAILURE'], { error }),
}

export const performEmailLogin = {
  request: (email, password) =>
    actionFactory(types.EMAIL_LOGIN['REQUEST'], { email, password }),
  success: account => actionFactory(types.EMAIL_LOGIN['SUCCESS'], { account }),
  failure: error => actionFactory(types.EMAIL_LOGIN['FAILURE'], { error }),
}

export const renewSession = {
  request: refreshToken =>
    actionFactory(types.RENEW_SESSION['REQUEST'], { refreshToken }),
  success: tokens => actionFactory(types.RENEW_SESSION['SUCCESS'], { tokens }),
  failure: error => actionFactory(types.RENEW_SESSION['FAILURE'], { error }),
}

export default {
  performEmailLogin,
  performLogout,
  renewSession,
}
