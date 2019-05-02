import createRequestTypes from '../../helpers/typeFactory'

const REGISTER = createRequestTypes('holepunch/account/REGISTER')
const DELETE_ACCOUNT = createRequestTypes('holepunch/account/DELETE_ACCOUNT')
const UPDATE_ACCOUNT = createRequestTypes('holepunch/account/UPDATE_ACCOUNT')
const UPDATE_ACCOUNT_PASSWORD = createRequestTypes('holepunch/account/UPDATE_ACCOUNT_PASSWORD')
const SET_CURRENT_ACCOUNT = 'holepunch/account/SET_CURRENT_ACCOUNT'
const GET_CONFIRMATION_TOKEN = createRequestTypes('holepunch/account/GET_CONFIRMATION_TOKEN')
const SEND_RESET_EMAIL = createRequestTypes('holepunch/account/SEND_RESET_EMAIL')
const SEND_EMAIL_CONFIRMATION = createRequestTypes('holepunch/account/SEND_EMAIL_CONFIRMATION')

export default {
  REGISTER,
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_PASSWORD,
  DELETE_ACCOUNT,
  SET_CURRENT_ACCOUNT,
  GET_CONFIRMATION_TOKEN,
  SEND_RESET_EMAIL,
  SEND_EMAIL_CONFIRMATION
}
