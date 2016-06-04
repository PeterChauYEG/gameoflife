export default function boardSize(state = [], action) {
  switch (action.type) {
    case 'SET_BOARD_SIZE':
      return action.size
    default:
      return state
  }
}