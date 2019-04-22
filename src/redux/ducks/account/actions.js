import types from './types'
import actionFactory from '../../helpers/actionFactory'

export const performRegister = {
  request: (email, password) =>
    actionFactory(types.REGISTER['REQUEST'], {
      email,
      password,
    }),
  success: account => actionFactory(types.REGISTER['SUCCESS'], { account }),
  failure: error => actionFactory(types.REGISTER['FAILURE'], { error }),
}

export const performLogout = {
  request: () => actionFactory(types.LOGOUT['REQUEST'], {}),
  success: account => actionFactory(types.LOGOUT['SUCCESS'], { account }),
  failure: error => actionFactory(types.LOGOUT['FAILURE'], { error }),
}

export const performEmailLogin = {
  request: (email, password) =>
    actionFactory(types.EMAIL_LOGIN['REQUEST'], { email, password }),
  success: account => actionFactory(types.EMAIL_LOGIN['SUCCESS'], { account }),
  failure: error => actionFactory(types.EMAIL_LOGIN['FAILURE'], { error }),
}

export const sendResetEmail = {
  request: email => actionFactory(types.SEND_RESET_EMAIL['REQUEST'], { email }),
  success: account =>
    actionFactory(types.SEND_RESET_EMAIL['SUCCESS'], { account }),
  failure: error => actionFactory(types.SEND_RESET_EMAIL['FAILURE'], { error }),
}

export const performUpdate = {
  request: (password, userId, token) => 
    actionFactory(types.UPDATE_USER['REQUEST'], { password, userId, token }),
  success: account => actionFactory(types.UPDATE_USER['SUCCESS'], { account }),
  failure: error => actionFactory(types.UPDATE_USER['FAILURE'], { error }),
}

export const setCurrentUser = user => {
  return {
    type: types.SET_CURRENT_USER,
    user,
  }
}

export default {
  performEmailLogin,
  performRegister,
  sendResetEmail,
  performUpdate,
}
