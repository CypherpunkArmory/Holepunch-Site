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

export const setCurrentUser = user => {
  return {
    type: types.SET_CURRENT_USER,
    user,
  }
}

export default {
  performEmailLogin,
  performRegister,
}
