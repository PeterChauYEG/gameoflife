import gameBoard from '../data/board'

export default function board(state = [], action) {
  switch (action.type) {
    case 'CLEAR_BOARD':
      return gameBoard
    default:
      return state
  }
}