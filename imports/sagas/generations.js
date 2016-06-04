import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

function* incrementGeneration(action) {
    if (action.isRunning) {
        yield delay(action.gameSpeed)
        yield put({ type: 'SET_GENERATION', generations: action.generations + 1})
    } else {
        return
    }
}

export default function* startGenerationCounter() {
    yield* takeLatest('START_GENERATION_COUNTER', incrementGeneration)
}
