import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import boardSize from './boardSize'

const rootReducer = combineReducers({
  boardSize,
  routing: routerReducer,
})

export default rootReducer