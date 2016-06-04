import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from '../reducers/index'

// import the root saga
import rootSaga from '../sagas/index'

// import default data
import board from '../data/board'
import controls from '../data/controls'
import generations from '../data/generations'

// create an object for the default data
const defaultState = {
  board,
  controls,
  generations,
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// redux devtools
const enhancers = compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f)

const store = createStore(rootReducer, defaultState, enhancers)

// run the saga
sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(browserHistory, store)

export default store