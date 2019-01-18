import createRequestTypes from '../../helpers/typeFactory'

const EMAIL_LOGIN = createRequestTypes('holepunch/account/LOGIN')
const LOGOUT = createRequestTypes('holepunch/account/LOGOUT')
const SET_CURRENT_USER = 'holepunch/account/SET_CURRENT_USER'
const REGISTER = createRequestTypes('holepunch/account/REGISTER')

export default {
  EMAIL_LOGIN,
  LOGOUT,
  REGISTER,
  SET_CURRENT_USER,
}
