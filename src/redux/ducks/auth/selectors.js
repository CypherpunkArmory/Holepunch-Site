import { createSelector } from 'reselect'
import { getAuthState } from '../../store'

const getAccount = state => state.accountState.account

export const authIsLoading = state => state.authState.isLoading

export const getError = state => state.authState.error

export const getIsLoggedIn = createSelector(
  [getAccount, getAuthState],
  (account, authState) => !!account && !!authState
)
