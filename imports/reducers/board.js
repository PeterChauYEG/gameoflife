import gameBoard from '../data/board'

export default function board(state = [], action) {
  switch (action.type) {
    case 'CLEAR_BOARD':
      return gameBoard
    case 'SET_CELL_HEALTH':
      const i = action.i
      return [
        ...state.slice(0, i),
        { ...state[i], health: action.health },
        ...state.slice(i + 1)
      ]
    case 'UPDATE_BOARD':
      return action.board
    default:
      return state
  }
}