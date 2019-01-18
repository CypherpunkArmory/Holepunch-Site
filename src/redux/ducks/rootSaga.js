import accountSaga from './account/sagas'

import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([accountSaga()])
}
