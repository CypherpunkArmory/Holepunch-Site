import createRequestTypes from '../../helpers/typeFactory'

const EMAIL_LOGIN = createRequestTypes('holepunch/account/LOGIN')
const SEND_RESET_EMAIL = createRequestTypes('holepunch/account/SEND_RESET_EMAIL')
const LOGOUT = createRequestTypes('holepunch/account/LOGOUT')
const SET_CURRENT_USER = 'holepunch/account/SET_CURRENT_USER'
const REGISTER = createRequestTypes('holepunch/account/REGISTER')
const UPDATE_USER = createRequestTypes('holepunch/account/UPDATE_USER')

export default {
  EMAIL_LOGIN,
  LOGOUT,
  REGISTER,
  SET_CURRENT_USER,
  SEND_RESET_EMAIL,
  UPDATE_USER
}
