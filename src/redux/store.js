import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import * as reducers from './ducks'
import rootSagas from './ducks/rootSaga'
import { setCurrentUser } from './ducks/account/actions'

const sagaMiddleware = createSagaMiddleware()

function getAuthState() {
  try {
    const authToken = JSON.parse(localStorage.getItem('authToken')) || undefined
    return authToken
  } catch (err) {
    return undefined
  }
}

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
    if (localStorage.authToken) {
      store.dispatch(setCurrentUser(getAuthState()))
    }
  }
  return store
}
