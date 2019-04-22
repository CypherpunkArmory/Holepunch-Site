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
        account: {
          ...state.account,
          ...action.account,
        }
      }
    case types.SEND_EMAIL_CONFIRMATION['REQUEST']:
      return {
        account: {
          ...state.account,
          emailConfirmation: { isLoading: true, error: null },
        },
      }
    case types.SEND_EMAIL_CONFIRMATION['SUCCESS']:
      return {
        account: {
          ...state.account,
          emailConfirmation: { isLoading: false, error: null },
        },
      }
    case types.SEND_EMAIL_CONFIRMATION['FAILURE']:
      return {
        account: {
          ...state.account,
          emailConfirmation: {
            isLoading: false,
            error: action.error || action,
          },
        },
      }
    case types.SEND_RESET_EMAIL['SUCCESS']:
      return {
        account: action.account,
      }
    case types.UPDATE_USER['SUCCESS']:
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
  state = {
    account: { emailConfirmation: { isLoading: false, error: null } },
    isLoading: false,
    error: null,
  },
  action
) => {
  return {
    ...state,
    ...requestReducer(action),
    ...accountReducer(state, action),
  }
}
