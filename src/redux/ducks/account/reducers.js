import types from './types'
import requestReducer from '../../helpers/requestReducer'

const accountReducer = (state, action) => {
  switch (action.type) {
    case types.EMAIL_LOGIN['SUCCESS']:
      return {
        account: action.account,
      }
    case types.LOGOUT['SUCCESS']:
      return {
        account: {},
      }
    case types.REGISTER['SUCCESS']:
      return {
        account: action.account,
      }
    case types.SET_CURRENT_USER:
      return {
        account: action.user,
      }
    default:
      return
  }
}

export default (
  state = { account: {}, isLoading: false, error: null },
  action
) => {
  return {
    ...state,
    ...requestReducer(action),
    ...accountReducer(state, action),
  }
}
