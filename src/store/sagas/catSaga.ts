import { call, put, takeEvery } from 'redux-saga/effects'
import { getCats } from '@/api/catApi'

function* workGetCatsFetch(): Generator {
  try {
    const cats = yield call(() => getCats())
    yield put({ type: 'cats/getCatsSuccess', payload: cats })
  } catch (error) {
    yield put({ type: 'cats/getCatsFailure', error })
  }
}

export function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}
