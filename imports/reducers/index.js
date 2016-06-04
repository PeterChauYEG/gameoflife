import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import board from './board'
import controls from './controls'
import generations from './generations'

const rootReducer = combineReducers({
  board,
  controls,
  generations,
  routing: routerReducer,
})

export default rootReducer