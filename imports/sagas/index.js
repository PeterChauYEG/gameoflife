import { fork } from 'redux-saga/effects'

// import sagas
import generations from './generations'

export default function* rootSaga() {
  yield [
    fork(generations)
  ]
}
