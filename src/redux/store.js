import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import * as reducers from './ducks'
import rootSagas from './ducks/rootSaga'
import { setCurrentAccount } from './ducks/account/actions'
import { getTokens } from './helpers/localStorage'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers,
  })
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSagas)
  
  if (typeof window !== 'undefined') {
    const authTokens = getTokens()
    if (authTokens) {
      const account = {
        email: authTokens.email,
        APIKey: authTokens.access_token,
      }
      store.dispatch(setCurrentAccount(account))
    }
  }
  return store
}
