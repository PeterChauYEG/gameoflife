import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

function* incrementGeneration(action) {
    if (action.isRunning) {
        yield delay(1000)
        yield put({ type: 'SET_GENERATION', generations: action.generations + 1})
    } else {
        yield put({ type: 'SET_GENERATION', generations: action.generations})
    }
}

export default function* startGenerationCounter() {
    yield* takeEvery('START_GENERATION_COUNTER', incrementGeneration)
}
