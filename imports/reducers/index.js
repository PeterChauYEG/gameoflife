import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import board from './board'
import generations from './generations'

const rootReducer = combineReducers({
  board,
  generations,
  routing: routerReducer,
})

export default rootReducer