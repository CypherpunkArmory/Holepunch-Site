import createRequestTypes from '../../helpers/typeFactory'

const EMAIL_LOGIN = createRequestTypes('holepunch/auth/LOGIN')
const LOGOUT = createRequestTypes('holepunch/auth/LOGOUT')
const RENEW_SESSION = createRequestTypes('holepunch/auth/RENEW_SESSION')

export default {
  EMAIL_LOGIN,
  LOGOUT,
  RENEW_SESSION,
}
