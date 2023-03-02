import { all } from 'redux-saga/effects'
import { catSaga } from './sagas/catSaga'

export function* rootSaga() {
  yield all([catSaga()])
}
