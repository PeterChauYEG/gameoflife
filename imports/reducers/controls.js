export default function controls(state = [], action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isRunning: true,
      }
    case 'PAUSE_GAME':
      return {
        ...state,
        isRunning: false,
      }
    case 'GENERATE_RANDOM_BOARD':
      return  {
        ...state,
        isRunning: false,
      }
    case 'INCREASE_SPEED':
      return {
        ...state,
        gameSpeed: action.gameSpeed / 2,
      }
    case 'DECREASE_SPEED':
      return {
        ...state,
        gameSpeed: action.gameSpeed * 2,
      }
    case 'SET_BOARD_SIZE':
      return {
        ...state,
        isRunning: false,
        boardSize: {
          rows: action.rows,
          columns: action.columns
        }
      }
    default:
      return state
  }
}
